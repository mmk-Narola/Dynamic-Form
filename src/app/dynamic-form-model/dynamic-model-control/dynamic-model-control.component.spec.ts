import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicModelControlComponent } from './dynamic-model-control.component';

describe('DynamicModelControlComponent', () => {
  let component: DynamicModelControlComponent;
  let fixture: ComponentFixture<DynamicModelControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicModelControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicModelControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
