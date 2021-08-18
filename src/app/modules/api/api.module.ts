import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { ApiComponent } from './api.component';
import { CorsCheckComponent } from './cors-check/cors-check.component';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ApiComponent, CorsCheckComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ApiRoutingModule
  ]
})
export class ApiModule { }
