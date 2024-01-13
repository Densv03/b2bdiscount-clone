import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDirectionDialogComponent } from './create-direction-dialog.component';

describe('CreateDirectionDialogComponent', () => {
	let component: CreateDirectionDialogComponent;
	let fixture: ComponentFixture<CreateDirectionDialogComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CreateDirectionDialogComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(CreateDirectionDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
