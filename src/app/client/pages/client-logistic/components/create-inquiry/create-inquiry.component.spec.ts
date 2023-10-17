import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInquiryComponent } from 'src/app/client/pages/client-logistic/components/create-inquiry/create-inquiry.component';

describe('CreateInquryComponent', () => {
	let component: CreateInquiryComponent;
	let fixture: ComponentFixture<CreateInquiryComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CreateInquiryComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(CreateInquiryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
