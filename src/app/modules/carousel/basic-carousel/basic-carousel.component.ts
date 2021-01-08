import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basic-carousel',
  templateUrl: './basic-carousel.component.html',
  styleUrls: ['./basic-carousel.component.scss']
})
export class BasicCarouselComponent implements OnInit {
  @Input('cards') cards: any[] = ["0", "1", "2", "3", "4", "5"];
  @Input('noOfVisibleCards') noOfVisibleCards: number = 1;
  @Input('autoScroll') autoScroll: boolean = true;
  @Input('indicators') indicators: boolean = true;

  @ViewChild('carousel') carousel: ElementRef;
  activeCarousel: number = 0;

  constructor() { }

  ngOnInit() {
    //this.slides$.subscribe(res=>console.log(res));
  }

  scrollCard(type: string) {
    if (!this.carousel.nativeElement) return;
    const { scrollWidth, scrollLeft, children, childElementCount } = this.carousel.nativeElement;
    const cardWidth = children[this.activeCarousel].offsetWidth;
    if (type === 'PREVIOUS' && this.activeCarousel !== 0) {
      this.activeCarousel--;
      this.carousel.nativeElement.scrollTo({ left: (cardWidth * (this.activeCarousel + 1)) - cardWidth, behavior: 'smooth' });
    };
    if (type === 'NEXT' && (this.activeCarousel !== (childElementCount - this.noOfVisibleCards))) {
      this.carousel.nativeElement.scrollTo({ left: (cardWidth * (this.activeCarousel + 1)), behavior: 'smooth' });
      this.activeCarousel++;
    }
    if (this.autoScroll) this.stopAutoScroll();
  }

  stopAutoScroll() {
    this.autoScroll = false;
    setTimeout(() => {
      this.autoScroll = true;
    }, 7000);
  }
}
