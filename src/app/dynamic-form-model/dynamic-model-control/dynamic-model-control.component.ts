import { state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { country } from '../Model/countries';
import { states } from '../Model/states';
import { FormElementControls } from '../Model/formsEle-control';
import { textBox } from '../Model/formTextbox';
import { radiBtn } from '../Model/formRadio';
import { textArea } from '../Model/formTechArea';
import { selectOption } from '../Model/formSelect';
import { checkBox } from '../Model/formCheckBox';

@Component({
  selector: 'app-dynamic-model-control',
  templateUrl: './dynamic-model-control.component.html',
  styleUrls: ['./dynamic-model-control.component.scss'],
})
export class DynamicModelControlComponent implements OnInit {
  @Input() formFields: FormElementControls<string | boolean>[] | null = [];
  userForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.FormGroup();
  }

  private FormGroup() {
    const group = {};
    this.formFields.forEach((field) => {
      group[field.key] = field.required
        ? new FormControl('', [...field.validators, Validators.required])
        : new FormControl('', field.validators);
    });
    this.userForm = new FormGroup(group);
  }

  onSubmit(): void {
    this.userForm.markAllAsTouched();
    if (this.userForm.invalid) {
      return;
    }
    console.log(this.userForm.value);
    this.userForm.reset();
  }
}
