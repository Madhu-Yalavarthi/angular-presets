import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaViewerComponent } from './media-viewer.component';
import { ZoomViewerComponent } from './zoom-viewer/zoom-viewer.component';

const routes: Routes = [
  {
    path: 'media-viewer',
    component: MediaViewerComponent,
    children: [
      { path: 'zoom-viewer', component: ZoomViewerComponent },
      { path: '', redirectTo: 'zoom-viewer', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaViewerRoutingModule { }
