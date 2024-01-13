import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInfoListComponent } from './header-info-list.component';

describe('HeaderInfoListComponent', () => {
	let component: HeaderInfoListComponent;
	let fixture: ComponentFixture<HeaderInfoListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeaderInfoListComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderInfoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
