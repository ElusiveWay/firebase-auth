import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QusetionBlockComponent } from './qusetion-block.component';

describe('QusetionBlockComponent', () => {
  let component: QusetionBlockComponent;
  let fixture: ComponentFixture<QusetionBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QusetionBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QusetionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
