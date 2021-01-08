import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Directive({ selector: '[carousel-central-scroll]' })
export class CarouselCentralScrollDirective implements AfterViewInit, OnDestroy {
  @Input('length') length: number;
  @Input('activeCarousel') activeCarousel: number;
  @Input('autoScroll') autoScroll: boolean;
  @Output('emitPosition') emitPosition: EventEmitter<number> = new EventEmitter();
  startingCardWidth: number;
  startingIndex: number;
  cardSliceWidth: number;
  sub: Subscription;
  constructor(private _element: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.startingIndex = (this.length * 2) / 2 - 1;
    this.activeCarousel = this.startingIndex;
    if (this._element.nativeElement) {
      const { scrollLeft, clientWidth, scrollWidth, childElementCount, children } = this._element.nativeElement;
      const cardWidth = children[0].offsetWidth;
      this.cardSliceWidth = (cardWidth / 5) * 4;
      this.startingCardWidth = (this.startingIndex * cardWidth) + this.cardSliceWidth;
      this._element.nativeElement.scrollTo({ left: this.startingCardWidth });
      this.sub = interval(5000)
        .subscribe((res) => {
          if (this.autoScroll) this.scrollDirection();
        })
    }

  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  scrollDirection() {
    const { scrollLeft, clientWidth, scrollWidth, childElementCount, children } = this._element.nativeElement;
    const cardWidth = children[0].offsetWidth;
    this.cardSliceWidth = (cardWidth / 5) * 4;
    this.startingCardWidth = (this.startingIndex * cardWidth) + this.cardSliceWidth;
    const maxRightWidth = (cardWidth * (childElementCount - 2)) - (cardWidth / 5);
    const minLeftWidth = this.cardSliceWidth;
    if (scrollLeft >= maxRightWidth || scrollLeft <= minLeftWidth) {
      this._element.nativeElement.scrollTo({ left: this.startingCardWidth, behavior: 'smooth' });
      this.activeCarousel = this.startingIndex;
      this.emitPosition.emit(this.activeCarousel);
      return;
    }
    this.activeCarousel++;
    this.emitPosition.emit(this.activeCarousel);
    this._element.nativeElement.scrollTo({ left: ((cardWidth * this.activeCarousel) + this.cardSliceWidth), behavior: 'smooth' });
  }
}
