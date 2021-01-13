import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaViewerRoutingModule } from './media-viewer-routing.module';
import { MediaViewerComponent } from './media-viewer.component';
import { ZoomViewerComponent } from './zoom-viewer/zoom-viewer.component';
import { MaterialModule } from 'src/app/material.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { CdkModule } from 'src/app/cdk.module';


@NgModule({
  declarations: [MediaViewerComponent, ZoomViewerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CdkModule,
    DirectivesModule,
    MediaViewerRoutingModule
  ]
})
export class MediaViewerModule { }
