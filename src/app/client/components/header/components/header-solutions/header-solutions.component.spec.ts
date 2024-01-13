import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSolutionsComponent } from './header-solutions.component';

describe('HeaderSolutionsComponent', () => {
	let component: HeaderSolutionsComponent;
	let fixture: ComponentFixture<HeaderSolutionsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [HeaderSolutionsComponent],
		});
		fixture = TestBed.createComponent(HeaderSolutionsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
