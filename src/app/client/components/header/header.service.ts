import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HeaderPopupState } from './types/header-popup-state.interface';
import { FormControl } from '@angular/forms';

@Injectable({
	providedIn: 'root',
})
export class HeaderService {
	private popupStateSource: BehaviorSubject<HeaderPopupState>;
	private toolTipIsOpenedSource: BehaviorSubject<boolean>;
	private headerIsTransparentSource: BehaviorSubject<boolean>;
	private profileNavIsOpenedSource: BehaviorSubject<boolean>;
	public openWorkSpace$ = new Subject<boolean>();
	private formControlSource: BehaviorSubject<string | null>;

	public searchFormControl = new FormControl<string>('');

	constructor() {
		this.headerIsTransparentSource = new BehaviorSubject<boolean>(true);
		this.profileNavIsOpenedSource = new BehaviorSubject<boolean>(false);
		this.popupStateSource = new BehaviorSubject<HeaderPopupState>({
			popupType: null,
			popupIsOpened: false,
		});
		this.toolTipIsOpenedSource = new BehaviorSubject(false);
		this.formControlSource = new BehaviorSubject<string | null>(null);
	}
	get profileNavIsOpened(): boolean {
		return this.profileNavIsOpenedSource.getValue();
	}

	get formControlValue(): string | null {
		return this.searchFormControl.value;
	}

	set formControlValue(value: string | null) {
		this.searchFormControl.setValue(value);
	}

	public popupState$(): Observable<HeaderPopupState> {
		return this.popupStateSource.asObservable();
	}
	public profileNavIsOpened$(): Observable<boolean> {
		return this.profileNavIsOpenedSource.asObservable();
	}
	public headerIsTransparent$(): Observable<boolean> {
		return this.headerIsTransparentSource.asObservable();
	}
	public toolTipIsOpened$(): Observable<boolean> {
		return this.toolTipIsOpenedSource.asObservable();
	}
	public updateToolTipState(state: boolean): void {
		this.toolTipIsOpenedSource.next(state);
	}
	public updateHeaderTransparent(isTransparent: boolean): void {
		// if (isTransparent && this.profileNavIsOpenedSource.getValue()) return;
		this.headerIsTransparentSource.next(isTransparent);
	}
	public updateProfileNavIsOpened(isOpened: boolean): void {
		this.profileNavIsOpenedSource.next(isOpened);
	}
	public updatePopupState(state: HeaderPopupState): void {
		this.popupStateSource.next(state);
	}

	public toggleToolTip(): void {
		this.toolTipIsOpenedSource.next(!this.toolTipIsOpenedSource.getValue());
	}
	public closeToolTip(): void {
		this.toolTipIsOpenedSource.next(false);
	}
	public getPopupStateValue(): HeaderPopupState {
		return this.popupStateSource.getValue();
	}
	public closeHeader(): void {
		this.popupStateSource.next({
			...this.popupStateSource.getValue(),
			popupIsOpened: false,
		});
	}
}
