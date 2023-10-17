import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticStubComponent } from './logistic-stub.component';

describe('LogisticStubComponent', () => {
	let component: LogisticStubComponent;
	let fixture: ComponentFixture<LogisticStubComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LogisticStubComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(LogisticStubComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
