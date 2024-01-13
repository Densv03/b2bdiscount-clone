import { NgModule } from '@angular/core';
import { B2bDatepickerComponent } from './b2b-datepicker.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import {
	CalendarHeaderComponent
} from "projects/b2b-datepicker/src/lib/components/calendar-header/calendar-header.component";
import { MatButtonModule } from "@angular/material/button";
import { B2bNgxIconModule } from "@b2b/ngx-icon";
import {AsyncPipe, DatePipe, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
	declarations: [B2bDatepickerComponent, CalendarHeaderComponent],
	imports: [
		MatFormFieldModule,
		MatInputModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatIconModule,
		MatButtonModule,
		B2bNgxIconModule,
		NgIf,
		DatePipe,
		ReactiveFormsModule,
		AsyncPipe,
	],
	exports: [B2bDatepickerComponent]
})
export class B2bDatepickerModule {}
