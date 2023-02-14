import { Component, OnInit } from '@angular/core';
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
  selector: 'app-display-field',
  templateUrl: './display-field.component.html',
  styleUrls: ['./display-field.component.scss'],
})
export class DisplayFieldComponent implements OnInit {
  myForm: FormElementControls<string | boolean>[] = [
    new textBox({
      key: 'fname',
      label: 'First Name',
      type: 'text',
      required: true,
    }),
    new textBox({
      key: 'lname',
      label: 'Last Name',
      type: 'text',
      required: false,
    }),

    new textBox({
      key: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      validators: [Validators.email],
    }),

    new textBox({
      key: 'password',
      label: 'Password',
      type: 'password',
      required: true,
      validators: [Validators.minLength(6)],
    }),

    new textBox({
      key: 'dob',
      label: 'DOB',
      type: 'date',
      required: true,
    }),

    new textBox({
      key: 'file',
      label: 'Image Upload',
      type: 'file',
      required: true,
      fileType: 'multiple',
    }),

    new radiBtn({
      key: 'gender',
      label: 'Gender',
      type: 'radio',
      required: true,
      options: [
        { key: 'male', value: 'Male' },
        { key: 'female', value: 'Female' },
        { key: 'other', value: 'Other' },
      ],
    }),

    new textArea({
      key: 'address',
      label: 'Address',
      required: true,
    }),

    new textBox({
      type: 'number',
      key: 'zipCode',
      label: 'ZipCode',
      required: true,
      validators: [Validators.maxLength(3)],
    }),

    new selectOption({
      key: 'states',
      label: 'State',
      options: states,
      required: true,
    }),

    new selectOption({
      key: 'country',
      label: 'Country',
      options: country,
      required: true,
    }),

    new checkBox({
      key: 'terms',
      value: 'Agree to terms',
    }),
  ];

  constructor() {}

  ngOnInit(): void {}
}
