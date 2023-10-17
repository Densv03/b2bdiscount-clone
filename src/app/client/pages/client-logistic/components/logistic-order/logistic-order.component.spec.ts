import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticOrderComponent } from './logistic-order.component';

describe('LogisticOrderComponent', () => {
	let component: LogisticOrderComponent;
	let fixture: ComponentFixture<LogisticOrderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LogisticOrderComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(LogisticOrderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
