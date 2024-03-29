import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPaymentAndShippingComponent } from './client-payment-and-shipping.component';

describe('ClientPaymentAndShippingComponent', () => {
	let component: ClientPaymentAndShippingComponent;
	let fixture: ComponentFixture<ClientPaymentAndShippingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ClientPaymentAndShippingComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ClientPaymentAndShippingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
