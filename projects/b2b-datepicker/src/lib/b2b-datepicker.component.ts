import { Component, Input } from "@angular/core";
import {
	CalendarHeaderComponent
} from "projects/b2b-datepicker/src/lib/components/calendar-header/calendar-header.component";
import { ComponentType } from "@angular/cdk/overlay";
interface IconPosition {
	top: string;
	right: string;
	bottom: string;
	left: string;
}

@Component({
  selector: 'b2b-datepicker',
  templateUrl: './b2b-datepicker.component.html',
  styleUrls: ['./b2b-datepicker.component.scss']
})
export class B2bDatepickerComponent{
	@Input() inputClassName: string = '';
	@Input() placeholder: string = '';
	@Input() iconName?: string;
	@Input() iconPosition?: Partial<IconPosition>;
	@Input() customHeader?: ComponentType<any> = CalendarHeaderComponent;
}
