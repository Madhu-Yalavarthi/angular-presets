import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-circular',
  templateUrl: './basic-circular.component.html',
  styleUrls: ['./basic-circular.component.scss']
})
export class BasicCircularComponent implements OnInit {
  @Input('progress') progress: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
