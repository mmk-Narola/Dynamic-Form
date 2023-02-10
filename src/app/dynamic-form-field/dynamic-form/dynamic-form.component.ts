import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Method - 1;
    // const formControl = {};
    // form_template.forEach((formTemplate) => {
    //   formControl[formTemplate.name] = new FormControl('', [
    //     Validators[formTemplate.validation],
    //   ]);
    // });
    // this.dynamicFormGroup = new FormGroup(formControl);

    // Method - 2;
    this.dynamicFormGroup = this.formBuilder.group({});
    this.formField.forEach((formTemplate) => {
      this.dynamicFormGroup.addControl(
        formTemplate.name,
        new FormControl('', [Validators[formTemplate.validation]])
      );
    });

    this.dynamicFormGroup.get('file-Upload').valueChanges.subscribe((file) => {
      console.log('File', file);
    });
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
