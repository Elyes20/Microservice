import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdAvionComponent } from './sd-avion.component';

describe('SdAvionComponent', () => {
  let component: SdAvionComponent;
  let fixture: ComponentFixture<SdAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdAvionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
