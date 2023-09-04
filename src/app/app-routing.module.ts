import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormViewComponent } from './form-view/form-view.component';
import { FlashScreenComponent } from './flash-screen/flash-screen.component';
import { SecondFormComponent } from './second-form/second-form.component';

const routes: Routes = [
  {
    path: '',
    component: FlashScreenComponent,
  },
  {
    path: 'form-view',
    component: FormViewComponent,
  },
  {
    path: 'second-form',
    component: SecondFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
