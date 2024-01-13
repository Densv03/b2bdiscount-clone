import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirProfileComponent } from './air-profile.component';

describe('AirProfileComponent', () => {
	let component: AirProfileComponent;
	let fixture: ComponentFixture<AirProfileComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AirProfileComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(AirProfileComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
