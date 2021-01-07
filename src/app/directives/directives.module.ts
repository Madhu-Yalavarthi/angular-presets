import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DIRECTIVES } from './index';


@NgModule({
  imports: [CommonModule],
  exports: [DIRECTIVES],
  declarations: [DIRECTIVES],
  providers: [],
})
export class DirectivesModule { }
