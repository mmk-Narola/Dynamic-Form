import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form-field/dynamic-form/dynamic-form.component';
import { DynamicModelControlComponent } from './dynamic-form-model/dynamic-model-control/dynamic-model-control.component';
import { DemoCopmComponent } from './demo-copm/demo-copm.component';

const routes: Routes = [
  { path: 'dynamic-form-field', component: DynamicFormComponent },
  { path: 'dynamic-model-control', component: DynamicModelControlComponent },
  { path: 'demo', component: DemoCopmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
