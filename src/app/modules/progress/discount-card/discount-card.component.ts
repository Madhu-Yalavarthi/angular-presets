import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount-card',
  templateUrl: './discount-card.component.html',
  styleUrls: ['./discount-card.component.scss']
})
export class DiscountCardComponent implements OnInit {
  @Input('progress') progress: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
