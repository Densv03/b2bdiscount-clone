import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitInquirySuccessComponent } from 'src/app/client/pages/client-logistic/components/submit-inquiry-success/submit-inquiry-success.component';

describe('CreateInquirySuccessComponent', () => {
	let component: SubmitInquirySuccessComponent;
	let fixture: ComponentFixture<SubmitInquirySuccessComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SubmitInquirySuccessComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SubmitInquirySuccessComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
