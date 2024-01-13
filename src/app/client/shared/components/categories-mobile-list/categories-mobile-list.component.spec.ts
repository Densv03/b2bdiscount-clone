import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesMobileListComponent } from './categories-mobile-list.component';

describe('CategoriesMobileListComponent', () => {
	let component: CategoriesMobileListComponent;
	let fixture: ComponentFixture<CategoriesMobileListComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CategoriesMobileListComponent],
		});
		fixture = TestBed.createComponent(CategoriesMobileListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
