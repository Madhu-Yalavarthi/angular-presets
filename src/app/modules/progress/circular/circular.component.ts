import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.scss']
})
export class CircularComponent implements OnInit {
  progress: number = 30;
  constructor() { }

  ngOnInit(): void {
  }

}
