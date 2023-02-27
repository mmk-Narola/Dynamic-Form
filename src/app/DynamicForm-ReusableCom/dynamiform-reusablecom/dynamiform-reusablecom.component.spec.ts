import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiformReusablecomComponent } from './dynamiform-reusablecom.component';

describe('DynamiformReusablecomComponent', () => {
  let component: DynamiformReusablecomComponent;
  let fixture: ComponentFixture<DynamiformReusablecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamiformReusablecomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamiformReusablecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
