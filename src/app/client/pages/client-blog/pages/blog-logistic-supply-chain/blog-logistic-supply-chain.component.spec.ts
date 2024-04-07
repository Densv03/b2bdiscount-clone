import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLogisticSupplyChainComponent } from './blog-logistic-supply-chain.component';

describe('BlogLogisticSupplyChainComponent', () => {
  let component: BlogLogisticSupplyChainComponent;
  let fixture: ComponentFixture<BlogLogisticSupplyChainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogLogisticSupplyChainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogLogisticSupplyChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
