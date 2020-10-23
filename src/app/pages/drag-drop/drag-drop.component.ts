import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  cards: any[] = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

  onDrag($event) {
    console.log("dragging--->" + $event.target.id);
    $event.dataTransfer.setData("text", $event.target.id);
  }

  onDrop($event) {
    $event.preventDefault();
    let data = $event.dataTransfer.getData("text");
    console.log("recieved--->" + data);
    $event.target.appendChild(document.getElementById(data));
  }

  allowDrop($event) {
    $event.preventDefault();
  }
}
