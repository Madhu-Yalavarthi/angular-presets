import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesginViewersComponent } from './desgin-viewers.component';

const routes: Routes = [
  {
    path: 'design-viewer',
    component: DesginViewersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesginViewersRoutingModule { }
