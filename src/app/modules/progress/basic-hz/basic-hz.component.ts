import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-hz',
  templateUrl: './basic-hz.component.html',
  styleUrls: ['./basic-hz.component.scss']
})
export class BasicHzComponent implements OnInit {
  @Input('progress') progress: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
