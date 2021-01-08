import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Directive({ selector: '[carousel-central-scroll]' })
export class CarouselCentralScrollDirective implements AfterViewInit, OnDestroy {
  @Input('length') length: number;
  @Input('noOfVisibleCards') noOfVisibleCards: number;
  @Input('activeCarousel') activeCarousel: number;
  @Input('autoScroll') autoScroll: boolean;
  @Output('emitPosition') emitPosition: EventEmitter<number> = new EventEmitter();
  startingCardWidth: number;
  eventListeners: any[] = [];
  sub: Subscription;
  constructor(private _element: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.activeCarousel = (this.length * 2) / 2 - 1;

    // this.emitPosition.emit(this.activeCarousel);
    if (this._element.nativeElement) {
      const { scrollLeft, clientWidth, scrollWidth, childElementCount, children } = this._element.nativeElement;
      const cardWidth = children[0].offsetWidth;
      this.startingCardWidth = this.activeCarousel * cardWidth + (cardWidth / 2);
      this._element.nativeElement.scrollTo({ left: this.startingCardWidth });
      // this.eventListeners.push(this.renderer.listen(this._element.nativeElement, 'scroll', (event) => this.onScroll(event)));
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
    const maxRightWidth = cardWidth * ((this.length * 3) - 1);
    const maxLeftWidth = cardWidth / 2;
    const endPointWidth = maxRightWidth - (cardWidth * 2);
    if (scrollLeft >= endPointWidth || scrollLeft <= maxLeftWidth) {
      this._element.nativeElement.scrollTo({ left: this.startingCardWidth, behavior: 'smooth' });
      this.activeCarousel = (this.length * 2) / 2 - 1;
      this.emitPosition.emit(this.activeCarousel);
      return;
    }
    this.activeCarousel++;
    this.emitPosition.emit(this.activeCarousel);
    this._element.nativeElement.scrollTo({ left: ((cardWidth * this.activeCarousel) + (cardWidth / 2)), behavior: 'smooth' });
  }

  // onScroll(event) {
  //   let target = event.target;
  //   if (!target) return;
  //   const { scrollLeft, width } = target;
  //   let scrollWidth = target.scrollWidth;
  //   // console.log(scrollLeft, scrollWidth, width);
  // }

}
