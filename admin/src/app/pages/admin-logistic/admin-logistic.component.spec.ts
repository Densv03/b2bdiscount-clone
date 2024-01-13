import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogisticComponent } from './admin-logistic.component';

describe('AdminLogisticComponent', () => {
	let component: AdminLogisticComponent;
	let fixture: ComponentFixture<AdminLogisticComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminLogisticComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(AdminLogisticComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
