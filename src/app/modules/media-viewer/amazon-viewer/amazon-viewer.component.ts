import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-amazon-viewer',
  templateUrl: './amazon-viewer.component.html',
  styleUrls: ['./amazon-viewer.component.scss']
})
export class AmazonViewerComponent implements OnInit, AfterViewInit, OnDestroy {
  defaultImg = "assets/temp-img/background.jpg";
  @ViewChild('imageHolder', { static: false }) imageHolder: ElementRef;
  @ViewChild('overlayHolder', { static: false }) overlayHolder: ElementRef;
  @ViewChild('lense', { static: false }) lense: ElementRef;
  @ViewChild('image', { static: false }) image: ElementRef;
  @ViewChild('overlay', { static: false }) overlay: ElementRef;


  active: boolean = false;
  private eventListeners: (() => void)[] = [];

  constructor(
    private renderer: Renderer2,
    private _viewContainerRef: ViewContainerRef,
  ) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (
      !this.imageHolder.nativeElement ||
      !this.overlayHolder.nativeElement ||
      !this.image.nativeElement ||
      !this.lense.nativeElement ||
      !this.overlay.nativeElement
    ) return;

    const imageHolder = this.imageHolder.nativeElement;
    const overlayHolder = this.overlayHolder.nativeElement;
    const image = this.image.nativeElement;
    const lense = this.lense.nativeElement;
    const overlay = this.overlay.nativeElement;

    this.eventListeners.push(this.renderer.listen(imageHolder, 'mouseenter', () => this.showZoomer()));
    this.eventListeners.push(this.renderer.listen(imageHolder, 'mouseleave', () => this.hideZoomer()));

    this.eventListeners.push(this.renderer.listen(lense, 'mousemove', (event) => this.moveLense(event, lense, image, overlay)));
    this.eventListeners.push(this.renderer.listen(image, 'mousemove', (event) => this.moveLense(event, lense, image, overlay)));

    this.eventListeners.push(this.renderer.listen(lense, 'touchmove', (event) => this.moveLense(event, lense, image, overlay)));
    this.eventListeners.push(this.renderer.listen(image, 'touchmove', (event) => this.moveLense(event, lense, image, overlay)));
  }

  ngOnDestroy(): void {
    this.eventListeners.forEach((destroyFn) => destroyFn());
  }


  moveLense(e: MouseEvent, lense: HTMLElement, image, overlay: HTMLElement) {
    let pos: { x: number, y: number }, x: number, y: number, position;
    const cx = overlay.offsetWidth / lense.offsetWidth;
    const cy = overlay.offsetHeight / lense.offsetHeight;

    const size = (image.width * cx) + "px " + (image.height * cy) + "px";
    // console.log(overlay.offsetWidth, overlay.offsetHeight);

    this.renderer.setStyle(overlay, 'background-image', "url('" + image.src + "')");
    this.renderer.setStyle(overlay, 'background-size', size);

    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = this.getCursorPos(e, image);
    /*calculate the position of the lens:*/
    x = pos.x - (lense.offsetWidth / 2);
    y = pos.y - (lense.offsetHeight / 2);
    /*prevent the lens from being positioned outside the image:*/
    if (x > image.width - lense.offsetWidth) { x = image.width - lense.offsetWidth; }
    if (x < 0) { x = 0; }
    if (y > image.height - lense.offsetHeight) { y = image.height - lense.offsetHeight; }
    if (y < 0) { y = 0; }
    /*set the position of the lens:*/
    lense.style.left = x + "px";
    lense.style.top = y + "px";
    /*display what the lens "sees":*/
    position = "-" + (x * cx) + "px -" + (y * cy) + "px";

    this.renderer.setStyle(overlay, 'background-position', position);
  }

  getCursorPos(e: MouseEvent, image) {
    var a, x = 0, y = 0;
    // e = e || window.event;
    /*get the x and y positions of the image:*/
    a = image.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }

  showZoomer() {
    this.renderer.setStyle(this.overlayHolder.nativeElement, 'display', 'block');
    this.renderer.setStyle(this.lense.nativeElement, 'display', 'block');
  }

  hideZoomer() {
    this.renderer.setStyle(this.overlayHolder.nativeElement, 'display', 'none');
    this.renderer.setStyle(this.lense.nativeElement, 'display', 'none');
  }

}

