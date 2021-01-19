import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desgin-viewers',
  templateUrl: './desgin-viewers.component.html',
  styleUrls: ['./desgin-viewers.component.scss']
})
export class DesginViewersComponent implements OnInit {
  progress: number = 30;
  constructor() { }

  ngOnInit(): void {
  }

}
