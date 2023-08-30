import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ChipsService} from "./chips.service";
import {getName} from "country-list";

@Component({
  selector: 'app-filter-chips',
  templateUrl: './filter-chips.component.html',
  styleUrls: ['./filter-chips.component.scss']
})
export class FilterChipsComponent implements OnInit {
	@Input() options: any[];
	@Output() removeFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor(public chipsService: ChipsService) { }

	ngOnInit(): void {
  }

	public removeChip(option: any): void {
		if (option.id) {
			this.chipsService.removeChip(option);
		} else {
			this.chipsService.removeChipsByHiddenLabel(option.filterName)
		}

		this.removeFilter.emit({filter: option, chipsState: this.chipsService.getChipsSource()});
	}

	public getChipsLabel(label: string): string {
		return getName(label) ?? label;
	}

}
