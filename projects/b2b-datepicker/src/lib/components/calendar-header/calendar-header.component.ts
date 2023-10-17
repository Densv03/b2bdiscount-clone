import {
  ChangeDetectorRef,
  Component,
  Inject,
} from '@angular/core';
import { MatCalendar, MatCalendarCell, MatCalendarView } from "@angular/material/datepicker";
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from "@angular/material/core";

@Component({
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss']
})
export class CalendarHeaderComponent<D> {
  constructor(
    private _calendar: MatCalendar<D>,
    private _dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    private cdr: ChangeDetectorRef,
  ) {
    _calendar.stateChanges.subscribe(() => {
      cdr.markForCheck();
    });
  }

  public get periodLabel(): string | number {
    return this._calendar.currentView === 'month' ?
      this._dateAdapter
        .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel)
        .toLocaleUpperCase() : this._dateAdapter.getYear(this._calendar.activeDate);
  }

  public previousClicked(): void {
    this._calendar.activeDate =
      this._calendar.currentView === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
  }

  public nextClicked(): void {
    if (this._calendar.currentView === 'year') {
      setTimeout(() => {
        this._calendar.activeDate = this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
        this.updateYearViewRows(this.flattenYearViewRows());
        this.cdr.detectChanges();
      }, 0);
    } else {
      this._calendar.activeDate = this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1);
    }
  }

  public changeViewMode(): void {
    this.setCalendarViewMode(this._calendar.currentView);
    if (this._calendar.currentView === 'year') {
      setTimeout(() => {
        this.updateYearViewRows(this.flattenYearViewRows());
        this.cdr.detectChanges();
      }, 0)
    } else if (this._calendar.currentView === 'month') {
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 0)
    }
  }

  private setCalendarViewMode(mode: MatCalendarView): void {
    switch (mode) {
      case 'month':
        this._calendar.currentView = 'year';
        break;
      case 'year':
        this._calendar.currentView = 'month';
        break;
      default:
        this._calendar.currentView = 'month';
        break;
    }
  }

  private flattenYearViewRows(): MatCalendarCell<D>[] {
    return this._calendar.yearView._matCalendarBody.rows.reduce((acc, row) => acc.concat(row), []);
  }

  private updateYearViewRows(temp: any[]): void {
    this._calendar.yearView._matCalendarBody.rows = [
			temp.slice(0, 3),
			temp.slice(3, 6),
			temp.slice(6, 9),
			temp.slice(9, 12),
    ];
  }
}
