import { Component, computed, inject, input, signal } from '@angular/core';
import { BaseFormControl } from './form-core/controllers/base-controller';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpenFormControlService } from './form-core/services/open-form-control.service';
import { OpenFormComponent } from './form-core/open-form/openform.component';
import { OpenFormDataService } from './form-core/services/open-form-data.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [OpenFormComponent, FormsModule, ReactiveFormsModule, AsyncPipe],
  providers: [OpenFormControlService, OpenFormDataService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly dataService = inject(OpenFormDataService);
  fields = toSignal<BaseFormControl<string>[]>(this.dataService.getFields());
  protected readonly title = signal('webapp');
  private readonly qcs = inject(OpenFormControlService);
  readonly form = computed<FormGroup>(() =>
    this.qcs.toFormGroup(this.fields() as BaseFormControl<string>[]),
  );

  
  payLoad = '';
  onSubmit() {
    this.payLoad = JSON.stringify(this.form().getRawValue());
  }
}
