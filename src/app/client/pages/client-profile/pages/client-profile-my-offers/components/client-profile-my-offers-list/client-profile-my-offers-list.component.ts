import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from "@angular/core";
import { B2bNgxLinkService } from "@b2b/ngx-link";

@Component({
	selector: "b2b-client-profile-my-offers-list",
	templateUrl: "./client-profile-my-offers-list.component.html",
	styleUrls: ["./client-profile-my-offers-list.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientProfileMyOffersListComponent implements OnInit, OnChanges {
	@Input() public options: any[];
	@Input() public link: string;
	@Input() public menuOptions: any;

	public parsedOptions: any[];
	constructor(public readonly b2bNgxLinkService: B2bNgxLinkService) {}

	ngOnChanges(): void {
		this.computeOptions();
	}

	ngOnInit(): void {
		this.computeOptions();
	}

	computeOptions() {
		this.parsedOptions = this.options.map((option) => {
			const updatedOptions = [
				...this.menuOptions.filter((el: { label: string; }) => (option.hidden ? el.label !== "Hide" : el.label !== "Unhide")),
			];
			return {
				...option,
				updatedOptions,
			};
		});
	}

	setBadgeText(reasonForDeletion: string): string {
		if (reasonForDeletion === 'I don\'t sell cargo anymore') {
			return 'BADGE.REMOVED_BY_OWNER'
		} else {
			return reasonForDeletion === 'Deleted by admin' ? 'BADGE.REJECTED'	: 'BADGE.SOLD';
		}
	}
}
