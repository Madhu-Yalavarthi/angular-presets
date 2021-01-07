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

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
  }

  previousCard() {
    if (!this.carousel.nativeElement) return;
    const { scrollWidth, scrollLeft, children } = this.carousel.nativeElement;
    const cardWidth = children[0].offsetWidth;
    this.carousel.nativeElement.scrollTo({ left: scrollLeft - cardWidth, behavior: 'smooth' });
    if (this.activeCarousel !== 0) this.activeCarousel--;
    this.autoScroll = false;
    setTimeout(() => {
      this.autoScroll = true;
    }, 5000);
  }

  nextCard() {
    if (!this.carousel.nativeElement) return;
    const { scrollWidth, scrollLeft, children } = this.carousel.nativeElement;
    const cardWidth = children[0].offsetWidth;
    this.carousel.nativeElement.scrollTo({ left: scrollLeft + cardWidth, behavior: 'smooth' });
    if (this.activeCarousel !== (this.cards.length - this.noOfVisibleCards)) this.activeCarousel++;
    this.autoScroll = false;
    setTimeout(() => {
      this.autoScroll = true;
    }, 5000);
  }

}
