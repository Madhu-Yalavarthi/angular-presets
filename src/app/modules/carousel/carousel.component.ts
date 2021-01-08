import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  options: any[] = ["basic", "central"];
  constructor() { }

  ngOnInit(): void {
  }

}
