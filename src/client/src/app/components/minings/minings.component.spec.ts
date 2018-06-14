import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningsComponent } from './minings.component';

describe('MiningsComponent', () => {
  let component: MiningsComponent;
  let fixture: ComponentFixture<MiningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
