import { Validators } from '@angular/forms';
import { state } from './states';
import { country } from './country';
import { FormField } from './form-interface';

export const formFieldData: FormField[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'input',
    fieldType: 'text',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Name Required',
      },
      {
        name: 'pattern',
        validator: Validators.pattern('^[a-zA-Z]+$'),
        message: 'Accept only Text',
      },
    ],
  },
  {
    name: 'email',
    label: 'Email',
    type: 'input',
    fieldType: 'email',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Email Required',
      },
      {
        name: 'email',
        validator: Validators.email,
        message: 'Email abc@gmail.com',
      },
    ],
  },
  {
    type: 'input',
    label: 'Password',
    fieldType: 'password',
    name: 'password',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Password Required',
      },
      {
        name: 'minlength',
        validator: Validators.minLength(3),
        message: 'mininum length of password is 3',
      },
    ],
  },
  {
    name: 'dob',
    label: 'DOB',
    type: 'input',
    fieldType: 'date',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Date Required',
      },
    ],
  },
  {
    name: 'file',
    label: 'Upload',
    type: 'input',
    fieldType: 'file',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'File Required',
      },
    ],
  },

  {
    name: 'gender',
    label: 'Gender',
    type: 'radio',
    options: [
      {
        _id: '1',
        name: 'Male',
        sortname: 'male',
      },
      {
        _id: '2',
        name: 'Female',
        sortname: 'female',
      },
      {
        _id: '3',
        name: 'Other',
        sortname: 'other',
      },
    ],
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Gender Required',
      },
    ],
  },
  {
    name: 'address',
    label: 'Address',
    type: 'textarea',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Address Required',
      },
    ],
  },
  {
    name: 'zipcode',
    label: 'ZipCode',
    type: 'input',
    fieldType: 'number',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Zip Required',
      },
      {
        name: 'minlength',
        validator: Validators.minLength(4),
        message: 'Min length of zip is 4',
      },
    ],
  },
  {
    name: 'country',
    label: 'Country',
    type: 'select',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Country Required',
      },
    ],
  },
  {
    name: 'state',
    label: 'State',
    type: 'select',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'State Required',
      },
    ],
  },
  {
    name: 'city',
    label: 'City',
    type: 'select',
    required: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'State Required',
      },
    ],
  },
  {
    name: 'terms',
    type: 'checkbox',
    value: 'Accept Term and Conditon',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Accept Terms',
      },
    ],
  },
];
