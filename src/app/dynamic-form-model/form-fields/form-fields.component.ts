import { Component, Input, OnInit } from '@angular/core';
import { FormElementControls } from '../Model/formsEle-control';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss'],
})
export class FormFieldsComponent implements OnInit {
  userForm: FormGroup;
  isSubmiit = false;
  @Input() formFields: FormElementControls<string | boolean>[] | null = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({});
    this.formFields.forEach((formTemplate) => {
      this.userForm.addControl(
        formTemplate.key,
        new FormControl('', formTemplate.validators)
      );
    });
  }

  get userFormControl() {
    return this.userForm.controls;
  }

  onSubmit(): void {
    this.isSubmiit = true;
    if (this.userForm.invalid) {
      alert('Error');
    }
    // this.userForm.markAllAsTouched();
    // if (this.userForm.invalid) return;
    // alert('Submit formGrp!');
    console.log(this.userForm.value);
    // this.userForm.reset();
  }
}
