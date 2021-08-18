import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presets-menu',
  templateUrl: './presets-menu.component.html',
  styleUrls: ['./presets-menu.component.scss']
})
export class PresetsMenuComponent implements OnInit {
  options = [
    { name: 'Carousel', route: '/carousel' },
    { name: 'Background', route: '/background' },
    { name: 'Media Viewer', route: '/media-viewer' },
    { name: 'Drag & Drop', route: '/drag-drop' },
    { name: 'Api', route: '/api' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
