import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCE1Component } from './mce1.component';

describe('MCE1Component', () => {
  let component: MCE1Component;
  let fixture: ComponentFixture<MCE1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MCE1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MCE1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
