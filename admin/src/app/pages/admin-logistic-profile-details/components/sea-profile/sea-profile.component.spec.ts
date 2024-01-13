import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaProfileComponent } from './sea-profile.component';

describe('SeaProfileComponent', () => {
	let component: SeaProfileComponent;
	let fixture: ComponentFixture<SeaProfileComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SeaProfileComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SeaProfileComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
