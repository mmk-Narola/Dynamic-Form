import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormField, FormFieldJSON } from '../formFields';

@Component({
  selector: 'app-dynamic-form-json',
  templateUrl: './dynamic-form-json.component.html',
  styleUrls: ['./dynamic-form-json.component.scss'],
})
export class DynamicFormJsonComponent implements OnInit {
  formFields: FormFieldJSON[] = [];
  dynamicForm = this.fb.group({});
  constructor(private httpService: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getDynamicFormField();
  }

  getDynamicFormField() {
    this.httpService
      .get('../../../assets/formField.json')
      .subscribe((res: FormField) => {
        this.formFields = res.data;
        this.setDynamicFormControl(res.data);
      });
  }
  setDynamicFormControl(controls: FormFieldJSON[]) {
    for (const control of controls) {
      const validators = [];

      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'min':
            validators.push(Validators.min(value));
            break;

          case 'max':
            validators.push(Validators.max(value));
            break;

          case 'required':
            if (value) {
              validators.push(Validators.required);
            }
            break;

          case 'requiredTrue':
            if (value) {
              validators.push(Validators.requiredTrue);
            }
            break;

          case 'email':
            if (value) {
              validators.push(Validators.email);
            }
            break;

          case 'minLength':
            validators.push(Validators.minLength(value));
            break;

          case 'maxLength':
            validators.push(Validators.maxLength(value));
            break;

          case 'pattern':
            validators.push(Validators.pattern(value));
            break;

          case 'nullValidator':
            if (value) {
              validators.push(Validators.nullValidator);
            }
            break;

          default:
            break;
        }
      }

      this.dynamicForm.addControl(
        control.name,
        this.fb.control(control.value, validators)
      );
    }
  }

  onSubmit() {
    if (this.dynamicForm.invalid) {
      return;
    }
    console.log(this.dynamicForm.value);
  }
}
