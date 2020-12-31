import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundWallPaperComponent } from './pages/background-wall-paper/background-wall-paper.component';
import { CustomDialogComponent } from './pages/custom-dialog/custom-dialog.component';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { ZoomViewerComponent } from './pages/zoom-viewer/zoom-viewer.component';

const routes: Routes = [
  { path: 'zoom-viewer', component: ZoomViewerComponent },
  { path: 'custom-dialog', component: CustomDialogComponent },
  { path: 'drag-drop', component: DragDropComponent },
  { path: 'background-wall-paper', component: BackgroundWallPaperComponent },
  { path: '', redirectTo: 'background-wall-paper', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
