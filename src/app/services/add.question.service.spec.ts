import { TestBed } from '@angular/core/testing';

import { Add.QuestionService } from './add.question.service';

describe('Add.QuestionService', () => {
  let service: Add.QuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Add.QuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
