import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { familyGuard } from './content/guards/family.guard';

const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo: '/login/loginAuthentication'},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'content', loadChildren: () => import('./content/content.module').then(m => m.ContentModule),
   canActivate: [familyGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
