import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogisticProfileDetailsComponent } from './admin-logistic-profile-details.component';

describe('ProfileDetailsComponent', () => {
	let component: AdminLogisticProfileDetailsComponent;
	let fixture: ComponentFixture<AdminLogisticProfileDetailsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminLogisticProfileDetailsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(AdminLogisticProfileDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
