import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSourcingRequestComponent } from './header-sourcing-request.component';

describe('HeaderSourcingRequestComponent', () => {
	let component: HeaderSourcingRequestComponent;
	let fixture: ComponentFixture<HeaderSourcingRequestComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [HeaderSourcingRequestComponent],
		});
		fixture = TestBed.createComponent(HeaderSourcingRequestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
