import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basic-carousel',
  templateUrl: './basic-carousel.component.html',
  styleUrls: ['./basic-carousel.component.scss']
})
export class BasicCarouselComponent implements OnInit {
  @Input('cards') cards: any[] = ["0", "1", "2", "3", "4", "5"];
  @Input('autoScroll') autoScroll: boolean = true;
  @Input('indicators') indicators: boolean = true;

  @ViewChild('carousel') carousel: ElementRef;
  activeIndex: number = 0;
  visibleCards: number;
  noOfVisibleCards: number = 5;

  constructor() { }

  ngOnInit() {
    //this.slides$.subscribe(res=>console.log(res));
  }

  scrollCard(type: string) {
    if (!this.carousel.nativeElement) return;
    const { scrollWidth, scrollLeft, children, childElementCount } = this.carousel.nativeElement;
    const cardWidth = children[0].offsetWidth;
    if (type === 'PREVIOUS' && this.activeIndex !== 0) {
      this.carousel.nativeElement.scrollTo({ left: (cardWidth * this.activeIndex) - cardWidth, behavior: 'smooth' });
      this.activeIndex--;
    };
    if (type === 'NEXT' && (this.activeIndex !== (childElementCount - this.visibleCards))) {

      this.activeIndex++;
      this.carousel.nativeElement.scrollTo({ left: (cardWidth * this.activeIndex), behavior: 'smooth' });
    }
    if (this.autoScroll) this.stopAutoScroll();
  }

  stopAutoScroll() {
    this.autoScroll = false;
    setTimeout(() => {
      this.autoScroll = true;
    }, 7000);
  }

  showRightArrow(clientWidth: number, cardWidth: number, childElementCount: number): boolean {
    const visibleCards = this.calculateVisibleCards(clientWidth, cardWidth);
    if (!visibleCards || visibleCards > childElementCount) return false;
    return (this.activeIndex !== (childElementCount - visibleCards)) && (childElementCount > visibleCards);
  }

  calculateVisibleCards(clientWidth: number, cardWidth: number) {
    return Math.round(clientWidth / cardWidth);
  }
}
