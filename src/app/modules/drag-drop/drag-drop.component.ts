import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {
  options: any[] = [{ name: 'Card Drop', route: '/drag-drop/card-drop' }]
  constructor() { }

  ngOnInit(): void {
  }

}
