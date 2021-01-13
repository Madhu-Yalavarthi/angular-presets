import { Portal, ComponentPortal, TemplatePortal, DomPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ApplicationRef, Component, OnInit, ComponentFactoryResolver, ElementRef, Inject, Injector, Input, OnDestroy, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-zoom-viewer',
  templateUrl: './zoom-viewer.component.html',
  styleUrls: ['./zoom-viewer.component.scss']
})
export class ZoomViewerComponent implements OnInit {

  defaultImg = "assets/temp-img/background.jpg";
  // @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<unknown>;
  // @ViewChild('domPortalContent') domPortalContent: ElementRef<HTMLElement>;

  @ViewChild('lense', { static: false }) lense: ElementRef;
  @ViewChild('image', { static: false }) image: ElementRef;
  @ViewChild('overlay', { static: false }) overlay: ElementRef;


  thumbLoaded: boolean = false;
  private eventListeners: (() => void)[] = [];




  // selectedPortal: Portal<any>;
  // componentPortal: ComponentPortal<ComponentPortalExample>;
  // templatePortal: TemplatePortal<any>;
  // domPortal: DomPortal<any>;

  constructor(
    private renderer: Renderer2,
    private _viewContainerRef: ViewContainerRef,
  ) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.componentPortal = new ComponentPortal(ComponentPortalExample);
    // this.templatePortal = new TemplatePortal(
    //   this.templatePortalContent,
    //   this._viewContainerRef
    // );
    // this.domPortal = new DomPortal(this.domPortalContent);
  }

  ngOnDestroy(): void {
    this.eventListeners.forEach((destroyFn) => destroyFn());
  }




  configZoomView() {
    let cx, cy, overlay, lense, img, size;
    this.thumbLoaded = true;

    overlay = this.overlay.nativeElement;
    lense = this.lense.nativeElement;
    img = this.image.nativeElement;


    cx = overlay.offsetWidth / lense.offsetWidth;
    cy = overlay.offsetHeight / lense.offsetHeight;

    size = (img.width * cx) + "px " + (img.height * cy) + "px";

    this.renderer.setStyle(overlay, 'background-image', "url('" + img.src + "')");
    this.renderer.setStyle(overlay, 'background-size', size);

    this.eventListeners.push(this.renderer.listen(lense, 'mousemove', (event) => this.moveLense(event, lense, img, cx, cy, overlay)));
    this.eventListeners.push(this.renderer.listen(img, 'mousemove', (event) => this.moveLense(event, lense, img, cx, cy, overlay)));

    // this.eventListeners.push(this.renderer.listen(lense, 'mouseout', (event) => this.zoomOut(event)));
    // this.eventListeners.push(this.renderer.listen(img, 'mouseout', (event) => this.zoomOut(event)));

    this.eventListeners.push(this.renderer.listen(lense, 'touchmove', (event) => this.moveLense(event, lense, img, cx, cy, overlay)));
    this.eventListeners.push(this.renderer.listen(img, 'touchmove', (event) => this.moveLense(event, lense, img, cx, cy, overlay)));


  }


  moveLense(e: MouseEvent, lense: HTMLElement, img, cx: number, cy: number, overlay: HTMLElement) {
    let pos: {x: number, y: number}, x:number, y:number, position;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e, img);
    /*calculate the position of the lens:*/
    x = pos.x - (lense.offsetWidth / 2);
    y = pos.y - (lense.offsetHeight / 2);
    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - lense.offsetWidth) { x = img.width - lense.offsetWidth; }
    if (x < 0) { x = 0; }
    if (y > img.height - lense.offsetHeight) { y = img.height - lense.offsetHeight; }
    if (y < 0) { y = 0; }
    /*set the position of the lens:*/
    lense.style.left = x + "px";
    lense.style.top = y + "px";
    /*display what the lens "sees":*/
    position = "-" + (x * cx) + "px -" + (y * cy) + "px";

    this.renderer.setStyle(overlay, 'background-position', position);
    // this.renderer.setStyle(overlay, 'display', 'block');
    // this.renderer.setStyle(lense, 'display', 'block');

    function getCursorPos(e: MouseEvent, img) {
      var a, x = 0, y = 0;
      // e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }


  }


  zoomOut(e: MouseEvent) {
    this.renderer.setStyle(this.overlay.nativeElement, 'display', 'none');
    this.renderer.setStyle(this.lense.nativeElement, 'display', 'none');
  }

}

// @Component({
//   selector: 'component-portal-example',
//   template: 'Hello, this is a component portal'
// })
// export class ComponentPortalExample { }
