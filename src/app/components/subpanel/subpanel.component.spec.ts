import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpanelComponent } from './subpanel.component';

describe('SubpanelComponent', () => {
  let component: SubpanelComponent;
  let fixture: ComponentFixture<SubpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
