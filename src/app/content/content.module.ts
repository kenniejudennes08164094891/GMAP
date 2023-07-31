import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContentComponent,
    FormPageComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    FormsModule
  ]
})
export class ContentModule { }
