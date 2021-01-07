import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PIPES } from './index';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [PIPES],
  declarations: [PIPES],
  providers: [],
})
export class PipesModule { }
