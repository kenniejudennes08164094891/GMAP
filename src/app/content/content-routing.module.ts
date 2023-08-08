import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  { path: 'dashboard', component: ContentComponent },
  { path: 'form', component: FormPageComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'editUser', component: EditUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
