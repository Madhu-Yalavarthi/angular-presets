import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Directive({ selector: '[carousel-scroll]' })
export class CarouselScrollDirective implements AfterViewInit, OnDestroy {
  @Input('activeIndex') activeIndex: number;
  @Input('autoScroll') autoScroll: boolean;
  @Output('emitPosition') emitPosition: EventEmitter<number> = new EventEmitter();
  @Output('emitVisibleCards') emitVisibleCards: EventEmitter<number> = new EventEmitter();
  visibleCards: number;
  scrollLimit: number;
  scrollOrientation: string = 'RIGHT';
  sub: Subscription;
  constructor(private _element: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    if (!this._element.nativeElement) return;
    const { scrollLeft, clientWidth, scrollWidth, childElementCount, children } = this._element.nativeElement;
    const cardWidth = children[0].offsetWidth;
    this.visibleCards = Math.round(clientWidth / cardWidth);
    console.log(clientWidth / cardWidth, this.visibleCards, childElementCount);
    this.scrollLimit = childElementCount - this.visibleCards;
    this._element.nativeElement.scrollTo({ left: 0 });
    if (this.autoScroll) this.initiateAutoScroll();
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  initiateAutoScroll() {
    this.sub = interval(5000)
      .subscribe((res) => {
        if (this.autoScroll) this.scrollDirection();
      })
  }

  scrollDirection() {
    const { clientWidth, scrollLeft, childElementCount, children } = this._element.nativeElement;
    const cardWidth = children[0].offsetWidth;
    this.visibleCards = Math.ceil(clientWidth / cardWidth);
    if (this.scrollOrientation === "RIGHT" && this.activeIndex === this.scrollLimit) {
      this.scrollOrientation = "LEFT";
    } else if (this.scrollOrientation === "LEFT" && this.activeIndex === 0) {
      this.scrollOrientation = "RIGHT";
    }
    if (this.scrollOrientation === "RIGHT") {
      this._element.nativeElement.scrollTo({ left: (cardWidth * this.activeIndex) + cardWidth, behavior: 'smooth' });
      this.activeIndex++;
    }
    else {
      this._element.nativeElement.scrollTo({ left: (cardWidth * this.activeIndex) - cardWidth, behavior: 'smooth' });
      this.activeIndex--;
    }
    // this.startScrolling(this.activeIndex);
    this.emitPosition.emit(this.activeIndex);
    this.emitVisibleCards.emit(this.visibleCards);
  }
}
