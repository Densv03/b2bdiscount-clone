import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCarouselDialogComponent } from './custom-carousel-dialog.component';

describe('CustomCarouselDialogComponent', () => {
	let component: CustomCarouselDialogComponent;
	let fixture: ComponentFixture<CustomCarouselDialogComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CustomCarouselDialogComponent],
		});
		fixture = TestBed.createComponent(CustomCarouselDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
