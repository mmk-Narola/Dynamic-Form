import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form-field/dynamic-form/dynamic-form.component';
import { DynamicModelControlComponent } from './dynamic-form-model/dynamic-model-control/dynamic-model-control.component';
import { DemoCopmComponent } from './demo-component/demo-copm.component';
import { DisplayFieldComponent } from './dynamic-form-model/display-field/display-field.component';
import { DynamicFormJsonComponent } from './DynamicForm-JSON/dynamic-form-json/dynamic-form-json.component';

const routes: Routes = [
  { path: 'dynamic-form-field', component: DynamicFormComponent },
  { path: 'dynamic-model-control', component: DisplayFieldComponent },
  { path: 'dynamic-form-json', component: DynamicFormJsonComponent },
  { path: 'demo', component: DemoCopmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
