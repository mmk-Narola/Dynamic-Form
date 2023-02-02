// import states from './states.json';
// import countries from './countries.json';
import { state } from './states';
import { country } from './countries';
import { ValidatorFn } from '@angular/forms';

const form_template = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'input',
    fieldType: 'text',
    validation: 'required',
    validators: 'minLength',
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'input',
    fieldType: 'text',
    validation: 'required',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'input',
    fieldType: 'email',
    validation: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'input',
    fieldType: 'password',
    validation: 'required',
  },
  {
    name: 'mobile',
    label: 'Mobile',
    type: 'input',
    fieldType: 'number',
    validation: 'required',
  },
  {
    name: 'address',
    label: 'Address',
    type: 'textarea',
    validation: 'required',
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'radio',
    validation: 'required',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    type: 'select',
    validation: 'required',
    name: 'country',
    country: country,
  },
  {
    type: 'select',
    validation: 'required',
    name: 'state',
    state: state,
  },
  {
    name: 'terms',
    type: 'checkbox',
    fieldType: 'checkbox',
    label: 'Agree to terms and conditions',
    validation: 'required',
  },
];
export default form_template;
