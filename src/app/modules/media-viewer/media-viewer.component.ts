import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-viewer',
  templateUrl: './media-viewer.component.html',
  styleUrls: ['./media-viewer.component.scss']
})
export class MediaViewerComponent implements OnInit {
  options: any[] = [
    { name: 'Fixed Viewer', route: '/media-viewer/zoom-viewer' },
    { name: 'Amazon Viewer', route: '/media-viewer/amazon-viewer' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
