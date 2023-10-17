import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqCreatedDialogComponent } from './rfq-created-dialog.component';

describe('RfqCreatedDialogComponent', () => {
	let component: RfqCreatedDialogComponent;
	let fixture: ComponentFixture<RfqCreatedDialogComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RfqCreatedDialogComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(RfqCreatedDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
