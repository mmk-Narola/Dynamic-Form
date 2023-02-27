import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldJSON } from '../form-field-interface';

@Component({
  selector: 'app-dynamic-json',
  templateUrl: './dynamic-json.component.html',
  styleUrls: ['./dynamic-json.component.scss'],
})
export class DynamicJsonComponent implements OnInit {
  formField: FieldJSON[] = [];
  dynamicForm2 = this.fb.group({});

  constructor(private httpService: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.DynamicFormField();
    console.log(this.dynamicForm2.controls);
  }

  DynamicFormField() {
    this.httpService
      .get('../../../assets/form-field-2.json')
      .subscribe((res: FieldJSON) => {
        this.formField = res.data;
        this.setDynamicFormControl(res.data);
      });
  }

  setDynamicFormControl(controls: FieldJSON[]) {
    for (const control of controls) {
      const validators = [];
      for (const [key, value] of Object.entries(control.validations)) {
        switch (key) {
          case 'required':
            if (value) {
              validators.push(Validators.required);
            }
            break;
          case 'pattern':
            if (value) {
              validators.push(Validators.pattern(value.validator));
            }
            break;
          default:
            break;
        }
        this.dynamicForm2.addControl(
          control.name,
          this.fb.control(control.value, validators)
        );
      }
    }
  }

  onSubmit() {
    if (this.dynamicForm2.invalid) {
      return;
    }
    console.log(this.dynamicForm2.value);
  }
}
