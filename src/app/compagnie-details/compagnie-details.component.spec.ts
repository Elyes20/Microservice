import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagnieDetailsComponent } from './compagnie-details.component';

describe('CompagnieDetailsComponent', () => {
  let component: CompagnieDetailsComponent;
  let fixture: ComponentFixture<CompagnieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompagnieDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompagnieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
