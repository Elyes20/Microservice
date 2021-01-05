import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagnieListComponent } from './compagnie-list.component';

describe('CompagnieListComponent', () => {
  let component: CompagnieListComponent;
  let fixture: ComponentFixture<CompagnieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompagnieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompagnieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
