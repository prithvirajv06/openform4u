import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { BaseFormControl as BaseFormControl } from '../controllers/base-controller';
@Injectable()
export class OpenFormControlService {
  toFormGroup(questions: BaseFormControl<string>[]) {
    const group: any = {};
    questions.forEach((question) => {
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}