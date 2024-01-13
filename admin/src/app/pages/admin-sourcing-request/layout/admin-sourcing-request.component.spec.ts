import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSourcingRequestComponent } from './admin-sourcing-request.component';

describe('AdminTradebidComponent', () => {
	let component: AdminSourcingRequestComponent;
	let fixture: ComponentFixture<AdminSourcingRequestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminSourcingRequestComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AdminSourcingRequestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
