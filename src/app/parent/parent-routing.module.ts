import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent.component';
import { FirstChildComponent } from './childComponents/first-child/first-child.component';
import { SecondChildComponent } from './childComponents/second-child/second-child.component';
import { ThirdChildComponent } from './childComponents/third-child/third-child.component';

const routes: Routes = [
  { path: 'Parent', component: ParentComponent,
  children: [
    { path: 'first-child', component: FirstChildComponent },
    { path: 'second-child', component: SecondChildComponent },
    { path: 'third-child', component: ThirdChildComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
