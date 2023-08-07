import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentComponent } from './parent.component';
import { FirstChildComponent } from './childComponents/first-child/first-child.component';
import { SecondChildComponent } from './childComponents/second-child/second-child.component';
import { ThirdChildComponent } from './childComponents/third-child/third-child.component';


@NgModule({
  declarations: [
    ParentComponent,
    FirstChildComponent,
    SecondChildComponent,
    ThirdChildComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }
