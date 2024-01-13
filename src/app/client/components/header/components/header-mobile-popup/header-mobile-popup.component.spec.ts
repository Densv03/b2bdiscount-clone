import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMobilePopupComponent } from './header-mobile-popup.component';

describe('HeaderMobilePopupComponent', () => {
	let component: HeaderMobilePopupComponent;
	let fixture: ComponentFixture<HeaderMobilePopupComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeaderMobilePopupComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderMobilePopupComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
