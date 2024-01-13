import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogisticProfileDialogComponent } from './add-logistic-profile-dialog.component';

describe('AddLogisticProfileDialogComponent', () => {
	let component: AddLogisticProfileDialogComponent;
	let fixture: ComponentFixture<AddLogisticProfileDialogComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddLogisticProfileDialogComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(AddLogisticProfileDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
