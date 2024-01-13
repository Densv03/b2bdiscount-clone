import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUnclaimedCargoGrid } from './client-unclaimed-cargo-grid.component';

describe('ClientLatestOffersGridComponent', () => {
	let component: ClientUnclaimedCargoGrid;
	let fixture: ComponentFixture<ClientUnclaimedCargoGrid>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientUnclaimedCargoGrid],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ClientUnclaimedCargoGrid);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
