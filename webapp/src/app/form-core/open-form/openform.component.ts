import {Component, input, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import { BaseFormControl } from '../controllers/base-controller';
@Component({
  selector: 'open-form',
  templateUrl: './openform.component.html',
  imports: [ReactiveFormsModule],
})
export class OpenFormComponent {
  readonly openControls = input.required<BaseFormControl<string>>();
  readonly form = input.required<FormGroup>();
  get isValid() {
    return this.form().controls[this.openControls().key].valid;
  }
}