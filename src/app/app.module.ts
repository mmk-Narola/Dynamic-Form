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

@NgModule({
  declarations: [
    AppComponent,
    InputfieldComponent,
    SelectoptionComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    TextareaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
