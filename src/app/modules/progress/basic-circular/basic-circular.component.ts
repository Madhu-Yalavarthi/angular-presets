import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basic-circular',
  templateUrl: './basic-circular.component.html',
  styleUrls: ['./basic-circular.component.scss']
})
export class BasicCircularComponent implements OnInit {
  @Input('progress') progress: number = 0;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }


}
