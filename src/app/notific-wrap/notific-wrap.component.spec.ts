import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificWrapComponent } from './notific-wrap.component';

describe('NotificWrapComponent', () => {
  let component: NotificWrapComponent;
  let fixture: ComponentFixture<NotificWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
