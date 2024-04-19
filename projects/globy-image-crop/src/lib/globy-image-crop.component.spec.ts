import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobyImageCropComponent } from './globy-image-crop.component';

describe('GlobyImageCropComponent', () => {
  let component: GlobyImageCropComponent;
  let fixture: ComponentFixture<GlobyImageCropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobyImageCropComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobyImageCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
