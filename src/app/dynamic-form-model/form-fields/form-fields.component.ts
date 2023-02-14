import { Component, Input, OnInit } from '@angular/core';
import { FormElementControls } from '../Model/formsEle-control';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss'],
})
export class FormFieldsComponent implements OnInit {
  @Input() field: FormElementControls<string | boolean>;
  @Input() userForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get userFormControl() {
    return this.userForm as FormGroup;
  }
}
