import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitInquiryComponent } from './submit-inquiry.component';

describe('SubmitInquiryComponent', () => {
	let component: SubmitInquiryComponent;
	let fixture: ComponentFixture<SubmitInquiryComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SubmitInquiryComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SubmitInquiryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
