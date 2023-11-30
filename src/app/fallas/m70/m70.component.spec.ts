import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M70Component } from './m70.component';

describe('M70Component', () => {
  let component: M70Component;
  let fixture: ComponentFixture<M70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [M70Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(M70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
