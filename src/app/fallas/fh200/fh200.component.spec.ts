import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FH200Component } from './fh200.component';

describe('FH200Component', () => {
  let component: FH200Component;
  let fixture: ComponentFixture<FH200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FH200Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FH200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
