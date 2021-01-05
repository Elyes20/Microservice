import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompagnieComponent } from './create-compagnie.component';

describe('CreateCompagnieComponent', () => {
  let component: CreateCompagnieComponent;
  let fixture: ComponentFixture<CreateCompagnieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompagnieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompagnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
