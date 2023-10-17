import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLogisticComponent } from './client-logistic.component';

describe('ClientLogisticComponent', () => {
	let component: ClientLogisticComponent;
	let fixture: ComponentFixture<ClientLogisticComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientLogisticComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ClientLogisticComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
