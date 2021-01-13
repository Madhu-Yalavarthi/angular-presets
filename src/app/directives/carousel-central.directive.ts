import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Directive({ selector: '[carousel-central-scroll]' })
export class CarouselCentralScrollDirective implements AfterViewInit, OnDestroy {
  @Input('activeIndex') activeIndex: number;
  @Input('autoScroll') autoScroll: boolean;
  @Output('emitPosition') emitPosition: EventEmitter<number> = new EventEmitter();
  startingCardWidth: number;
  startingIndex: number;
  cardSliceWidth: number;
  sub: Subscription;
  constructor(private _element: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {

    if (this._element.nativeElement) {
      const { scrollLeft, clientWidth, scrollWidth, childElementCount, children } = this._element.nativeElement;

      this.startingIndex = (childElementCount / 3) - 1;
      console.log(childElementCount, this.startingIndex);
      this.activeIndex = this.startingIndex;
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
      this.activeIndex = this.startingIndex;
      this.emitPosition.emit(this.activeIndex);
      return;
    }
    this.activeIndex++;
    this.emitPosition.emit(this.activeIndex);
    this._element.nativeElement.scrollTo({ left: ((cardWidth * this.activeIndex) + this.cardSliceWidth), behavior: 'smooth' });
  }
}
