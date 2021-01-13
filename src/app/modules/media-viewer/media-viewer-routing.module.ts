import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmazonViewerComponent } from './amazon-viewer/amazon-viewer.component';
import { MediaViewerComponent } from './media-viewer.component';
import { ZoomViewerComponent } from './zoom-viewer/zoom-viewer.component';

const routes: Routes = [
  {
    path: 'media-viewer',
    component: MediaViewerComponent,
    children: [
      { path: 'zoom-viewer', component: ZoomViewerComponent },
      { path: 'amazon-viewer', component: AmazonViewerComponent},
      { path: '', redirectTo: 'zoom-viewer', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaViewerRoutingModule { }
