import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticItemComponent } from './logistic-item.component';

describe('LogisticItemComponent', () => {
	let component: LogisticItemComponent;
	let fixture: ComponentFixture<LogisticItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LogisticItemComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(LogisticItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
