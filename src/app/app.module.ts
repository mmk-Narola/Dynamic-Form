import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputfieldComponent } from './Components/inputfield/inputfield.component';
import { SelectoptionComponent } from './Components/selectoption/selectoption.component';
import { RadiobuttonComponent } from './Components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './Components/checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextareaComponent } from './Components/textarea/textarea.component';
import { DynamicFormComponent } from './dynamic-form-field/dynamic-form/dynamic-form.component';
import { DynamicModelControlComponent } from './dynamic-form-model/dynamic-model-control/dynamic-model-control.component';
import { DemoCopmComponent } from './demo-component/demo-copm.component';
import { FormFieldsComponent } from './dynamic-form-model/form-fields/form-fields.component';
import { DisplayFieldComponent } from './dynamic-form-model/display-field/display-field.component';

@NgModule({
  declarations: [
    AppComponent,
    InputfieldComponent,
    SelectoptionComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    TextareaComponent,
    DynamicFormComponent,
    DynamicModelControlComponent,
    DemoCopmComponent,
    FormFieldsComponent,
    DisplayFieldComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
