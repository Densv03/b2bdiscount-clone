import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';

import { User } from 'src/app/core/models/user/user.model';
import * as countryList from 'country-list';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/client/pages/client-profile/services/user/user.service';
import { Dialog } from '@angular/cdk/dialog';
import { animate, style, transition, trigger } from '@angular/animations';
import { fadeInOutAnimation } from '../../../../../client-marketplace/shared/animations/fade-in-out.animation';

@Component({
	selector: 'b2b-buyer-information',
	templateUrl: './buyer-information.component.html',
	styleUrls: ['./buyer-information.component.scss'],
	animations: [fadeInOutAnimation],
})
export class BuyerInformationComponent implements OnInit, OnChanges {
	@Input() user: User | any;
	@Input() phoneNumber: any = {};
	@Input() email: string = '';
	@Input() isNotMyRfq!: boolean;
	public showBuyerInfo = false;

	constructor(
		private readonly router: Router,
		private readonly dialog: Dialog,
		private activeRoute: ActivatedRoute,
		private userService: UserService
	) {}

	public ngOnInit(): void {}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes['user']?.currentValue && !changes['user'].firstChange) {
			this.user = changes['user']?.currentValue;
		}
	}

	public showDetails(): void {
		if (this.userService.getUser() && !this.showBuyerInfo) {
			this.showBuyerInfo = true;
		} else {
			this.router.navigate(['/auth/register-credentials']);
		}
	}
	public getPhoneNumber(): string {
		return this.showBuyerInfo || !this.isNotMyRfq
			? this.user?.dialCode + this.user?.number
			: '+123456789';
	}

	public getPhoneNumberLink(): string {
		return `tel:${this.getPhoneNumber()}`;
	}

	public getEmail(): string {
		return this.showBuyerInfo || !this.isNotMyRfq
			? this.user?.email
			: 'email@email.com';
	}

	public getEmailLink(): string {
		return `mailto:${this.getEmail()}`;
	}

	public getCountryNameByCode(countryCode: string): string {
		return countryCode ? countryList.getName(countryCode.toUpperCase()) : '';
	}
}
