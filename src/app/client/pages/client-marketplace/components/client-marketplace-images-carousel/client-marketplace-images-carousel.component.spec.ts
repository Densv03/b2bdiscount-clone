import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMarketplaceImagesCarouselComponent } from './client-marketplace-images-carousel.component';

describe('ClientMarketplaceImagesCarouselComponent', () => {
  let component: ClientMarketplaceImagesCarouselComponent;
  let fixture: ComponentFixture<ClientMarketplaceImagesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientMarketplaceImagesCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientMarketplaceImagesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
