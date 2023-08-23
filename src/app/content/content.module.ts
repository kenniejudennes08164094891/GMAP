import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './components/edit-user/edit-user.component';
//import { GoogleChartsModule } from 'angular-google-charts';
import { PaginationComponent } from './components/pagination/pagination.component';     //npm i angular-google-charts
import {MatSelectModule} from '@angular/material/select';

const materialModules = [
  MatSelectModule
]

@NgModule({
  declarations: [
    ContentComponent,
    FormPageComponent,
    ProfileComponent,
    EditUserComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    materialModules
   // GoogleChartsModule
  ],

})
export class ContentModule { }
