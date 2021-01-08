import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-central-view-carousel',
  templateUrl: './central-view-carousel.component.html',
  styleUrls: ['./central-view-carousel.component.scss']
})
export class CentralViewCarouselComponent implements OnInit {
  @ViewChild('carousel') carousel: ElementRef;
  slides$: Observable<any[]>;
  cards = ["0", "1", "2", "3", "4", "5"];
  autoScroll: boolean = true;
  activeCarousel: number = 0;
  noOfVisibleCards: number = 2;

  constructor() { }


  ngOnInit(): void {
  }

  scrollCard(type: string) {
    if (!this.carousel.nativeElement) return;
    const { scrollWidth, scrollLeft, children } = this.carousel.nativeElement;
    const cardWidth = children[this.activeCarousel].offsetWidth;
    if (type === 'PREVIOUS' && this.activeCarousel !== 0) {
      this.activeCarousel--;
      this.carousel.nativeElement.scrollTo({ left: ((cardWidth * (this.activeCarousel + 1)) - (cardWidth/2)), behavior: 'smooth' });
    };
    if (type === 'NEXT' && (this.activeCarousel !== ((this.cards.length * 3) - 2))) {
      this.carousel.nativeElement.scrollTo({ left: ((cardWidth * (this.activeCarousel + 1)) + (cardWidth / 2)), behavior: 'smooth' });
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
