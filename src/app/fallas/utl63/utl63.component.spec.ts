import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UTL63Component } from './utl63.component';

describe('UTL63Component', () => {
  let component: UTL63Component;
  let fixture: ComponentFixture<UTL63Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UTL63Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UTL63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
