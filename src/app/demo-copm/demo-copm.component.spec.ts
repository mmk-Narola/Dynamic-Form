import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCopmComponent } from './demo-copm.component';

describe('DemoCopmComponent', () => {
  let component: DemoCopmComponent;
  let fixture: ComponentFixture<DemoCopmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCopmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoCopmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
