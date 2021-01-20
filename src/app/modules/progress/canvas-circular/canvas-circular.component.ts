import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas-circular',
  templateUrl: './canvas-circular.component.html',
  styleUrls: ['./canvas-circular.component.scss']
})
export class CanvasCircularComponent implements OnInit, AfterViewInit, OnChanges {
  @Input('progress') progress: number = 0;
  @ViewChild('graph') graph: ElementRef;
  canvas: HTMLCanvasElement;
  span: HTMLSpanElement;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (!this.graph.nativeElement) return;
    let el = this.graph.nativeElement as HTMLElement;
    const options = {
      percent: this.progress,
      size: parseInt(el.getAttribute('data-size')) || 120,
      lineWidth: parseInt(el.getAttribute('data-line')) || 12,
      rotate: parseInt(el.getAttribute('data-rotate')) || 0
    }

    this.canvas = this.renderer.createElement('canvas'); //document.createElement('canvas');
    this.span = this.renderer.createElement('span');
    this.span.textContent = options.percent + '%';

    // if (typeof (G_vmlCanvasManager) !== 'undefined') {
    //   G_vmlCanvasManager.initElement(canvas);
    // }

    const ctx = this.canvas.getContext('2d');
    this.renderer.setAttribute(this.canvas, 'width', `${options.size}px`);
    this.renderer.setAttribute(this.canvas, 'height', `${options.size}px`);
    // this.canvas.width = options.size;
    // this.canvas.height = options.size

    el.appendChild(this.span);
    el.appendChild(this.canvas);

    ctx.translate(options.size / 2, options.size / 2); // change center
    ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

    const radius = (options.size - options.lineWidth) / 2;
    this.drawCircle(this.canvas, '#efefef', options.lineWidth, 100 / 100, radius);
    this.drawCircle(this.canvas, '#97a71d', options.lineWidth, options.percent / 100, radius);

  }



  ngOnChanges(changes: SimpleChanges): void {
    if (changes.progress.firstChange) return;
    if (!this.graph.nativeElement || !this.canvas || !this.span) return;
    let el = this.graph.nativeElement as HTMLElement;
    const options = {
      percent: this.progress,
      size: parseInt(el.getAttribute('data-size')) || 120,
      lineWidth: parseInt(el.getAttribute('data-line')) || 12,
      rotate: parseInt(el.getAttribute('data-rotate')) || 0
    }
    const radius = (options.size - options.lineWidth) / 2;
    this.span.textContent = options.percent + '%';
    this.drawCircle(this.canvas, '#efefef', options.lineWidth, 100 / 100, radius);
    this.drawCircle(this.canvas, '#97a71d', options.lineWidth, options.percent / 100, radius);
  }


  drawCircle(canvas: HTMLCanvasElement, color: string, lineWidth: number, percent: number, radius: number) {
    const ctx = canvas.getContext('2d');
    percent = Math.min(Math.max(0, percent), 1);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
    ctx.strokeStyle = color;
    ctx.lineCap = 'round'; // butt, round or square
    ctx.lineWidth = lineWidth
    ctx.stroke();
  }

}
