// import states from './states.json';
// import countries from './countries.json';
import { state } from './states';
import { country } from './countries';

const form_template = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'input',
    fieldType: 'text',
    validation: 'required',
    validators: 'minLength',
    required: true,
  },
  // {
  //   name: 'lastName',
  //   label: 'Last Name',
  //   type: 'input',
  //   fieldType: 'text',
  //   validation: 'required',
  // },
  {
    name: 'email',
    label: 'Email',
    type: 'input',
    fieldType: 'email',
    validation: 'email',
    required: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'input',
    fieldType: 'password',
    validation: 'required',
    required: true,
  },
  {
    name: 'mobile',
    label: 'Mobile',
    type: 'input',
    fieldType: 'number',
    validation: 'required',
    required: true,
  },
  {
    name: 'address',
    label: 'Address',
    type: 'textarea',
    validation: 'required',
    required: true,
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
    required: true,
  },
  {
    type: 'select',
    validation: 'required',
    name: 'country',
    country: country,
    required: true,
  },
  {
    type: 'select',
    validation: 'required',
    name: 'state',
    state: state,
    required: true,
  },
  {
    name: 'file-Upload',
    label: 'File Image',
    type: 'input',
    fieldType: 'file',
    validation: 'required',
    required: true,
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
// import { ValidatorFn } from '@angular/forms';
// export class form_template {
//   name: string;
//   label: string;
//   type: string;
//   fieldType: string;
//   required: boolean;
//   options: { key: string; value: string }[];
//   controlType: string;
//   validators: ValidatorFn[] | null;

//   constructor() {
//     this.name = '';
//     this.label = '';
//     this.type = '';
//     this.fieldType = '';
//     this.required = true;
//     this.options = [];
//     this.controlType = '';
//     this.validators = [];
//   }

//   //      name: 'firstName',
//   //     label: 'First Name',
//   //     type: 'input',
//   //     fieldType: 'text',
//   //     validation: 'required',
//   //     validators: 'minLength',
//   //     required: true,
// }
