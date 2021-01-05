import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAvionComponent } from './register-avion.component';

describe('RegisterAvionComponent', () => {
  let component: RegisterAvionComponent;
  let fixture: ComponentFixture<RegisterAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAvionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
