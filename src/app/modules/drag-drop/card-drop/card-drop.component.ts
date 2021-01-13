import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-drop',
  templateUrl: './card-drop.component.html',
  styleUrls: ['./card-drop.component.scss']
})
export class CardDropComponent implements OnInit {
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
