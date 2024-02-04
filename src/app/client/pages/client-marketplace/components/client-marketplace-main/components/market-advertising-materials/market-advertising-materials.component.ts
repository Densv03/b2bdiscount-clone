import {
	Component,
	ElementRef,
	EventEmitter,
	Output,
	ViewChild,
} from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CreateRfqDialogComponent } from '../../../../../client-sourcing-request/components/create-rfq-dialog/create-rfq-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../../../../client-profile/services/user/user.service';
import { Router } from '@angular/router';
import { PlatformService } from '../../../../../../services/platform/platform.service';
import { DialogService } from '../../../../../../../core/services/dialog-service/dialog.service';

@UntilDestroy()
@Component({
	selector: 'b2b-market-advertising-materials',
	templateUrl: './market-advertising-materials.component.html',
	styleUrls: ['./market-advertising-materials.component.scss'],
})
export class MarketAdvertisingMaterialsComponent {
	@ViewChild('scrollBox', { static: true }) scrollBox: ElementRef;
	@Output() emitSearchBar = new EventEmitter<void>();
	public sourcingProcess = [
		{
			icon: 'second-search',
			title: 'Browse products and companies efficiently.',
		},
		{
			icon: 'aim',
			title: 'Leverage power of sourcing requests',
		},
		{
			icon: 'comment-text',
			title: 'Negotiate details',
		},
	];
	public images = [
		'marketplace-main/browse-products',
		'marketplace-main/power-of-sourcing-requests',
		'marketplace-main/negotiate-details',
	];
	public activeItem: BehaviorSubject<number> = new BehaviorSubject<number>(0);

	constructor(
		private readonly dialogService: DialogService,
		public readonly platformService: PlatformService
	) {}

	ngAfterViewInit(): void {
		this.handleScroll();
	}

	public get isNotMobileWidth(): Observable<boolean> {
		return fromEvent(window, 'resize').pipe(
			startWith(window.innerWidth > 600),
			map(() => window.innerWidth > 600),
			untilDestroyed(this)
		);
	}

	public scrollTo(scrollToSearchBar?: boolean): void {
		if (scrollToSearchBar) {
			this.emitSearchBar.emit();
		}
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}

	public selectItem(index: number): void {
		this.activeItem.next(index);
		this.scrollBox.nativeElement.scrollLeft =
			(this.scrollBox.nativeElement.firstChild.scrollWidth + 24) * index;

		if (window.innerWidth > 600) {
			for (const child of this.scrollBox.nativeElement.children) {
				child.lastChild.style.transition = '0.5s ease-in-out 0.4s';
			}
		}
	}

	public createRfq(): void {
		this.dialogService.openDialog(CreateRfqDialogComponent, {
			panelClass: ['add-rfq-popup', 'contact-supplier-form-dialog'],
		});
	}

	private handleScroll(): void {
		fromEvent(this.scrollBox.nativeElement, 'scroll')
			.pipe(filter(() => window.innerWidth < 600))
			.subscribe(() => {
				this.activeItem.next(
					Math.round(
						this.scrollBox.nativeElement.scrollLeft /
							(this.scrollBox.nativeElement.firstChild.scrollWidth + 24)
					)
				);
			});
	}
}
