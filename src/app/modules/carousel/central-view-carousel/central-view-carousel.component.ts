import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-central-view-carousel',
  templateUrl: './central-view-carousel.component.html',
  styleUrls: ['./central-view-carousel.component.scss']
})
export class CentralViewCarouselComponent implements OnInit {
  @ViewChild('carousel') carousel: ElementRef;
  @Input('cards') cards: any[] = ["0", "1", "2", "3", "4", "5"];
  autoScroll: boolean = true;
  activeCarousel: number = 0;
  noOfVisibleCards: number = 1;

  constructor() { }


  ngOnInit(): void {
  }

  scrollCard(type: string) {
    if (!this.carousel.nativeElement) return;
    const { scrollWidth, scrollLeft, children, childElementCount } = this.carousel.nativeElement;
    const lastIndex = (childElementCount * 3) - 2;
    const cardWidth = children[0].offsetWidth;
    const cardSliceWidth = (cardWidth / 5) * 4;
    const rightWidth = (cardWidth * (this.activeCarousel + 1)) + cardSliceWidth;
    const leftWidth = (cardWidth * (this.activeCarousel - 1)) + cardSliceWidth;
    if (type === 'PREVIOUS' && this.activeCarousel !== 0) {
      this.activeCarousel--;
      this.carousel.nativeElement.scrollTo({ left: leftWidth, behavior: 'smooth' });
    };
    if (type === 'NEXT' && (this.activeCarousel !== lastIndex)) {
      this.carousel.nativeElement.scrollTo({ left: rightWidth, behavior: 'smooth' });
      this.activeCarousel++;
    }
    this.stopAutoScroll();
  }

  stopAutoScroll() {
    this.autoScroll = false;
    setTimeout(() => {
      this.autoScroll = true;
    }, 7000);
  }
}
