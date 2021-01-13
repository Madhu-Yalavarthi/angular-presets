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


  @ViewChild('image', { static: false }) image: ElementRef;
  @ViewChild('overlay', { static: false }) overlay: ElementRef;
  @ViewChild('lense', { static: false }) lense: ElementRef;

  thumbLoaded: boolean = false;
  private eventListeners: (() => void)[] = [];


  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent: ElementRef<HTMLElement>;

  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<ComponentPortalExample>;
  templatePortal: TemplatePortal<any>;
  domPortal: DomPortal<any>;

  constructor(
    private renderer: Renderer2,
    private _viewContainerRef: ViewContainerRef,
  ) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(ComponentPortalExample);
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
    this.domPortal = new DomPortal(this.domPortalContent);
  }

  ngOnDestroy(): void {
    this.eventListeners.forEach((destroyFn) => destroyFn());
  }




  configZoomView() {
    let cx, cy, result, cursorBox, img, size;
    this.thumbLoaded = true;

    result = this.overlay.nativeElement;
    cursorBox = this.lense.nativeElement;
    img = this.image.nativeElement;


    cx = result.offsetWidth / cursorBox.offsetWidth;
    cy = result.offsetHeight / cursorBox.offsetHeight;

    size = (img.width * cx) + "px " + (img.height * cy) + "px";

    this.renderer.setStyle(result, 'background-image', "url('" + img.src + "')");
    this.renderer.setStyle(result, 'background-size', size);

    this.eventListeners.push(this.renderer.listen(cursorBox, 'mousemove', (event) => this.moveLense(event, cursorBox, img, cx, cy, result)));
    this.eventListeners.push(this.renderer.listen(img, 'mousemove', (event) => this.moveLense(event, cursorBox, img, cx, cy, result)));

    // this.eventListeners.push(this.renderer.listen(cursorBox, 'mouseout', (event) => this.zoomOut(event)));
    // this.eventListeners.push(this.renderer.listen(img, 'mouseout', (event) => this.zoomOut(event)));

    this.eventListeners.push(this.renderer.listen(cursorBox, 'touchmove', (event) => this.moveLense(event, cursorBox, img, cx, cy, result)));
    this.eventListeners.push(this.renderer.listen(img, 'touchmove', (event) => this.moveLense(event, cursorBox, img, cx, cy, result)));


  }


  moveLense(e: MouseEvent, cursorBox, img, cx, cy, result) {
    var pos, x, y, position;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    /*calculate the position of the lens:*/
    x = pos.x - (cursorBox.offsetWidth / 2);
    y = pos.y - (cursorBox.offsetHeight / 2);
    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - cursorBox.offsetWidth) { x = img.width - cursorBox.offsetWidth; }
    if (x < 0) { x = 0; }
    if (y > img.height - cursorBox.offsetHeight) { y = img.height - cursorBox.offsetHeight; }
    if (y < 0) { y = 0; }
    /*set the position of the lens:*/
    cursorBox.style.left = x + "px";
    cursorBox.style.top = y + "px";
    /*display what the lens "sees":*/
    position = "-" + (x * cx) + "px -" + (y * cy) + "px";

    this.renderer.setStyle(result, 'background-position', position);
    // this.renderer.setStyle(result, 'display', 'block');
    // this.renderer.setStyle(cursorBox, 'display', 'block');

    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
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

@Component({
  selector: 'component-portal-example',
  template: 'Hello, this is a component portal'
})
export class ComponentPortalExample { }
