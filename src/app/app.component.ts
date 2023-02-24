import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import form_template from './dynamic-form-field/formFields/formField';
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
  }
}

// {
//   "name": " ",
//   "label": " :",
//   "type": "input",
//   "fieldType": "button",
//   "value": "Button",
//   "validators": {
//     "required": true
//   }
// },
// {
//   "name": " ",
//   "label": " :",
//   "type": "input",
//   "fieldType": "color",
//   "validators": {
//     "required": true
//   }
// },
// {
//   "name": " ",
//   "label": " :",
//   "type": "input",
//   "fieldType": "datetime-local",
//   "validators": {
//     "required": true
//   }
// },
// {
//   "name": " ",
//   "label": " :",
//   "type": "input",
//   "fieldType": "hidden",
//   "validators": {
//     "required": true
//   }
// },
// {
//   "name": " ",
//   "label": " :",
//   "type": "input",
//   "fieldType": "url",
//   "validators": {
//     "required": true
//   }
// },
// {
//   "name": " ",
//   "label": " :",
//   "type": "input",
//   "fieldType": "week",
//   "validators": {
//     "required": true
//   }
// },
// {
//   "name": " ",
//   "label": " :",
//   "type": "input",
//   "fieldType": "image",
//   "validators": {
//     "required": true
//   }
// },
// {
//   "name": " ",
//   "label": " :",
//   "type": "input",
//   "fieldType": "tel",
//   "validators": {
//     "required": true
//   }
// },
// {
//   "name": " ",
//   "label": " :",
//   "type": "input",
//   "fieldType": "month",
//   "validators": {
//     "required": true
//   }
// },
// {
//   "name": " ",
//   "label": " :",
//   "type": "input",
//   "fieldType": "range",
//   "validators": {
//     "required": true
//   }
// },
// {
//   "name": " ",
//   "label": " :",
//   "type": "input",
//   "fieldType": "search",
//   "validators": {
//     "required": true
//   }
// },
// {
//   "name": " ",
//   "label": " :",
//   "type": "input",
//   "fieldType": "time",
//   "validators": {
//     "required": true
//   }
// },
