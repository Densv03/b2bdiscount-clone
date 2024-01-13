import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderResourcesComponent } from './header-resources.component';

describe('HeaderResourcesComponent', () => {
	let component: HeaderResourcesComponent;
	let fixture: ComponentFixture<HeaderResourcesComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [HeaderResourcesComponent],
		});
		fixture = TestBed.createComponent(HeaderResourcesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
