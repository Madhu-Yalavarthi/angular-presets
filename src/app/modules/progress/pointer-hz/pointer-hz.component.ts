import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pointer-hz',
  templateUrl: './pointer-hz.component.html',
  styleUrls: ['./pointer-hz.component.scss']
})
export class PointerHzComponent implements OnInit {
  @Input('progress') progress: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
