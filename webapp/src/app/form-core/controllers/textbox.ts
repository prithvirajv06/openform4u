import { BaseFormControl } from "./base-controller";


export class Textbox extends BaseFormControl<string> {
  override controlType = 'textbox';
}