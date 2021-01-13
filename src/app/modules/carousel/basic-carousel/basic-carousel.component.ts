import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basic-carousel',
  templateUrl: './basic-carousel.component.html',
  styleUrls: ['./basic-carousel.component.scss']
})
export class BasicCarouselComponent implements OnInit, AfterViewInit {
  @Input('cards') cards: any[] = ["0", "1", "2", "3", "4", "5"];
  @Input('autoScroll') autoScroll: boolean = true;
  @Input('indicators') indicators: boolean = true;

  @ViewChild('carousel') carousel: ElementRef;
  activeIndex: number = 0;
  visibleCards: number;

  constructor() { }

  ngOnInit() {
    //this.slides$.subscribe(res=>console.log(res));
  }

  ngAfterViewInit(){
    if(!this.carousel.nativeElement) return;
    const { clientWidth, scrollLeft, children, childElementCount } = this.carousel.nativeElement;
    const cardWidth = children[0].offsetWidth;
    this.visibleCards = this.calculateVisibleCards(clientWidth, cardWidth);
  }

  scrollCard(type: string) {
    if (!this.carousel.nativeElement) return;
    const { clientWidth, scrollLeft, children, childElementCount } = this.carousel.nativeElement;
    const cardWidth = children[0].offsetWidth;
    this.visibleCards = this.calculateVisibleCards(clientWidth, cardWidth);
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

  calculateVisibleCards(clientWidth: number, cardWidth: number) {
    return Math.round(clientWidth / cardWidth);
  }
}
