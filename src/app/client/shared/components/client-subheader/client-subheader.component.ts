import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {B2bNgxInputThemeEnum} from "@b2b/ngx-input";
import {B2bNgxButtonThemeEnum} from "@b2b/ngx-button";
import {BehaviorSubject, Observable, of} from "rxjs";
import {FormControl} from "@angular/forms";
import {filter} from "rxjs/operators";
import {NavigationStart, Router} from "@angular/router";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {UserService} from "../../../pages/client-profile/services/user/user.service";

@UntilDestroy()
@Component({
	selector: 'b2b-client-subheader',
	templateUrl: './client-subheader.component.html',
	styleUrls: ['./client-subheader.component.scss']
})
export class ClientSubheaderComponent implements OnInit {
	@Input() searchControl: string;
	@Output() searchValue = new EventEmitter<string>();

	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;
	public readonly b2bNgxInputThemeEnum: typeof B2bNgxInputThemeEnum;
	public addOfferUrl: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public makeRfqUrl: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public addProductUrl: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	public rootRole$: Observable<boolean> = of(false);
	public isAuth$: Observable<boolean> = of(false);

	public search: FormControl;

	constructor(private readonly router: Router,
							private readonly userService: UserService) {
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	}

	ngOnInit(): void {
		this.search = new FormControl(this.searchControl || '');
		this.checkUser();
		this.setSearchValue();
		this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe((el: any) => {
			el.url.includes("offers") ? this.addOfferUrl.next(true) : this.addOfferUrl.next(false);
			el.url.includes("tradebid/listing") ? this.makeRfqUrl.next(true) : this.makeRfqUrl.next(false);
			el.url.includes("b2bmarket") ? this.addProductUrl.next(true) : this.addProductUrl.next(false);
		});

		this.router.url.includes("offers") ? this.addOfferUrl.next(true) : this.addOfferUrl.next(false);
		this.router.url.includes("tradebid/listing") ? this.makeRfqUrl.next(true) : this.makeRfqUrl.next(false);
		this.router.url.includes("b2bmarket") ? this.addProductUrl.next(true) : this.addProductUrl.next(false);
	}

	private checkUser(): void {
		this.userService.getUser$().pipe(
			untilDestroyed(this)
		)
			.subscribe((user) => {
				this.isAuth$ = of(!!user);
				this.rootRole$ = of(user?.rootRole?.name === "supplier" || user.role.name === 'admin');
			});
	}

	private setSearchValue(): void {
		this.search.valueChanges
			.pipe(untilDestroyed(this))
			.subscribe(value => this.searchValue.emit(value))
	}
}
