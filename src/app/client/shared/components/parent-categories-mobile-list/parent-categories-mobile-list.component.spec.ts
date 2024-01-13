import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCategoriesMobileListComponent } from './parent-categories-mobile-list.component';

describe('ParentCategoriesMobileListComponent', () => {
	let component: ParentCategoriesMobileListComponent;
	let fixture: ComponentFixture<ParentCategoriesMobileListComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ParentCategoriesMobileListComponent],
		});
		fixture = TestBed.createComponent(ParentCategoriesMobileListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
