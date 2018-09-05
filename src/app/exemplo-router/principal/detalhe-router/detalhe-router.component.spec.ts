import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheRouterComponent } from './detalhe-router.component';

describe('DetalheRouterComponent', () => {
  let component: DetalheRouterComponent;
  let fixture: ComponentFixture<DetalheRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
