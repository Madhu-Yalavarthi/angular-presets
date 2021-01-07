import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Directive({ selector: '[carousel-scroll]' })
export class CarouselScrollDirective implements AfterViewInit, OnDestroy {
  @Input('length') length: number;
  @Input('noOfVisibleCards') noOfVisibleCards: number;
  @Input('activeCarousel') activeCarousel: number;
  @Input('autoScroll') autoScroll: boolean;
  @Output('emitPosition') emitPosition: EventEmitter<number> = new EventEmitter();
  scrollLimit: number;
  cardWidth: number;
  scrollOrientation: string = 'RIGHT';
  eventListeners: any[] = [];
  sub: Subscription;
  constructor(private _element: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.scrollLimit = this.length - this.noOfVisibleCards;
    if (this._element.nativeElement) {
      const { scrollLeft, clientWidth, scrollWidth, childElementCount, children } = this._element.nativeElement;
      this._element.nativeElement.scrollTo({ left: 0 });
      // this.eventListeners.push(this.renderer.listen(this._element.nativeElement, 'scroll', (event) => this.onScroll(event)));
      this.sub = interval(5000)
        .subscribe((res) => {
          this.cardWidth = children[0].offsetWidth;
          if (this.autoScroll) this.scrollDirection();
        })
    }

  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  scrollDirection() {
    if (this.scrollOrientation === "RIGHT" && this.activeCarousel === this.scrollLimit) {
      this.scrollOrientation = "LEFT";
    } else if (this.scrollOrientation === "LEFT" && this.activeCarousel === 0) {
      this.scrollOrientation = "RIGHT";
    }
    if (this.scrollOrientation === "RIGHT") this.activeCarousel++;
    else this.activeCarousel--;
    this.startScrolling(this.activeCarousel);
  }

  // onScroll(event) {
  //   let target = event.target;
  //   if (!target) return;
  //   const { scrollLeft, width } = target;
  //   let scrollWidth = target.scrollWidth;
  //   // console.log(scrollLeft, scrollWidth, width);
  // }


  startScrolling(counter: number) {
    this.emitPosition.emit(counter);
    const { scrollWidth, scrollLeft, childElementCount } = this._element.nativeElement;
    if (this.scrollOrientation === "LEFT") this._element.nativeElement.scrollTo({ left: scrollLeft - this.cardWidth, behavior: 'smooth' });
    if (this.scrollOrientation === "RIGHT") this._element.nativeElement.scrollTo({ left: scrollLeft + this.cardWidth, behavior: 'smooth' });

  }
}
