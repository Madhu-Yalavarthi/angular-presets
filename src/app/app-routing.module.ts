import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomDialogComponent } from './pages/custom-dialog/custom-dialog.component';
import { ZoomViewerComponent } from './pages/zoom-viewer/zoom-viewer.component';

const routes: Routes = [
  { path: 'zoom-viewer', component: ZoomViewerComponent },
  { path: 'custom-dialog', component: CustomDialogComponent },
  { path: '', redirectTo: 'custom-dialog', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
