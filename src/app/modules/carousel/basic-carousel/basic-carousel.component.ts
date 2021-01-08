import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basic-carousel',
  templateUrl: './basic-carousel.component.html',
  styleUrls: ['./basic-carousel.component.scss']
})
export class BasicCarouselComponent implements OnInit {
  @ViewChild('carousel') carousel: ElementRef;
  slides$: Observable<any[]>;
  cards = ["0", "1", "2", "3", "4", "5", "6"];
  autoScroll: boolean = true;
  activeCarousel: number = 0;
  noOfVisibleCards: number = 3;

  constructor() { }


  ngOnInit(): void {

  }

  scrollCard(type: string) {
    if (!this.carousel.nativeElement) return;
    const { scrollWidth, scrollLeft, children } = this.carousel.nativeElement;
    const cardWidth = children[this.activeCarousel].offsetWidth;
    if (type === 'PREVIOUS' && this.activeCarousel !== 0) {
      this.activeCarousel--;
      this.carousel.nativeElement.scrollTo({ left: (cardWidth * (this.activeCarousel + 1)) - cardWidth, behavior: 'smooth' });
    };
    if (type === 'NEXT' && (this.activeCarousel !== (this.cards.length - this.noOfVisibleCards))) {
      this.carousel.nativeElement.scrollTo({ left: (cardWidth * (this.activeCarousel + 1)), behavior: 'smooth' });
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
