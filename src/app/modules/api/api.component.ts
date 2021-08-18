import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  options: any[] = [
    { name: 'CORS Checker', route: '/api/cors-checker' },
    // { name: 'Amazon Viewer', route: '/media-viewer/amazon-viewer' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
