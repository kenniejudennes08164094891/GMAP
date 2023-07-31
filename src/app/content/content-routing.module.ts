import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'dashboard', component: ContentComponent },
  { path: 'form', component: FormPageComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
