import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-viewer',
  templateUrl: './media-viewer.component.html',
  styleUrls: ['./media-viewer.component.scss']
})
export class MediaViewerComponent implements OnInit {
  options: any[] = [{ name: 'Zoom Viewer', route: 'zoom-viewer' }]
  constructor() { }

  ngOnInit(): void {
  }

}
