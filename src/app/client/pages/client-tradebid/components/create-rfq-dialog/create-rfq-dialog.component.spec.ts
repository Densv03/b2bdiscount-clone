import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRfqDialogComponent } from './create-rfq-dialog.component';

describe('CreateRfqDialogComponent', () => {
	let component: CreateRfqDialogComponent;
	let fixture: ComponentFixture<CreateRfqDialogComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CreateRfqDialogComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(CreateRfqDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
