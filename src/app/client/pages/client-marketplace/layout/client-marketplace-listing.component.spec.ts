import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ClientMarketplaceListingComponent } from "./client-marketplace-listing.component";

describe("ClientMarketplaceComponent", () => {
	let component: ClientMarketplaceListingComponent;
	let fixture: ComponentFixture<ClientMarketplaceListingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientMarketplaceListingComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ClientMarketplaceListingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
