import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import form_template from './formFields/formField';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'DynamicForms';
  formField = form_template;
  dynamicFormGroup: FormGroup;
  isSubmiit = false;

  constructor() {}

  ngOnInit(): void {
    let formGroup = {};

    form_template.forEach((formTemplate) => {
      formGroup[formTemplate.name] = new FormControl('', [
        Validators[formTemplate.validation],
      ]);
    });

    this.dynamicFormGroup = new FormGroup(formGroup);
  }

  get f() {
    return this.dynamicFormGroup.controls;
  }

  ngSubmit() {
    this.isSubmiit = true;
    if (this.dynamicFormGroup.invalid) {
      return;
    }
    console.log(this.dynamicFormGroup.value);
    this.dynamicFormGroup.reset();
  }
}
