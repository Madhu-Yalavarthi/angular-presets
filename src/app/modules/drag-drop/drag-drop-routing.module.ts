import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDropComponent } from './card-drop/card-drop.component';
import { DragDropComponent } from './drag-drop.component';

const routes: Routes = [
  {
    path: 'drag-drop',
    component: DragDropComponent,
    children: [
      { path: 'card-drop', component: CardDropComponent },
      { path: '', redirectTo: 'card-drop', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragDropRoutingModule { }
