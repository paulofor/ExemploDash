import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalRouterComponent } from './principal-router.component';

describe('PrincipalRouterComponent', () => {
  let component: PrincipalRouterComponent;
  let fixture: ComponentFixture<PrincipalRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
