import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Directive({ selector: '[carousel-scroll]' })
export class CarouselScrollDirective implements AfterViewInit, OnDestroy {
  @Input('noOfVisibleCards') noOfVisibleCards: number;
  @Input('activeCarousel') activeCarousel: number;
  @Input('autoScroll') autoScroll: boolean;
  @Output('emitPosition') emitPosition: EventEmitter<number> = new EventEmitter();
  scrollLimit: number;
  scrollOrientation: string = 'RIGHT';
  sub: Subscription;
  constructor(private _element: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    if (!this._element.nativeElement) return;
    const { scrollLeft, clientWidth, scrollWidth, childElementCount, children } = this._element.nativeElement;
    this.scrollLimit = childElementCount - this.noOfVisibleCards;
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
    if (this.scrollOrientation === "RIGHT" && this.activeCarousel === this.scrollLimit) {
      this.scrollOrientation = "LEFT";
    } else if (this.scrollOrientation === "LEFT" && this.activeCarousel === 0) {
      this.scrollOrientation = "RIGHT";
    }
    if (this.scrollOrientation === "RIGHT") this.activeCarousel++;
    else this.activeCarousel--;
    this.startScrolling(this.activeCarousel);
  }

  startScrolling(counter: number) {
    this.emitPosition.emit(counter);
    const { scrollWidth, scrollLeft, childElementCount, children } = this._element.nativeElement;
    const cardWidth = children[0].offsetWidth;
    if (this.scrollOrientation === "LEFT") this._element.nativeElement.scrollTo({ left: scrollLeft - cardWidth, behavior: 'smooth' });
    if (this.scrollOrientation === "RIGHT") this._element.nativeElement.scrollTo({ left: scrollLeft + cardWidth, behavior: 'smooth' });

  }
}
