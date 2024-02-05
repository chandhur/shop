import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilderImageComponent } from './silder-image.component';

describe('SilderImageComponent', () => {
  let component: SilderImageComponent;
  let fixture: ComponentFixture<SilderImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SilderImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SilderImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
