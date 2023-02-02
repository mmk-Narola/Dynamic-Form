import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import form_template from '../formFields/formField';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
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
  }
}
