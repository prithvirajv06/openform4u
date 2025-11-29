import { BaseFormControl } from "./base-controller";


export class Dropdown extends BaseFormControl<string> {
  override controlType = 'dropdown';
}