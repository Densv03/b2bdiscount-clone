import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientUnclaimedCargoComponent } from './client-unclaimed-cargo.component';

describe('ClientLatestOffersComponent', () => {
	let component: ClientUnclaimedCargoComponent;
	let fixture: ComponentFixture<ClientUnclaimedCargoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientUnclaimedCargoComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ClientUnclaimedCargoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
