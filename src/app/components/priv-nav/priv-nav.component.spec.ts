import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivNavComponent } from './priv-nav.component';

describe('PrivNavComponent', () => {
  let component: PrivNavComponent;
  let fixture: ComponentFixture<PrivNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
