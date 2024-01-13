import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBecomeUserInstructionsComponent } from './header-become-user-instructions.component';

describe('HeaderBecomeUserInstructionsComponent', () => {
	let component: HeaderBecomeUserInstructionsComponent;
	let fixture: ComponentFixture<HeaderBecomeUserInstructionsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeaderBecomeUserInstructionsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderBecomeUserInstructionsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
