import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-radial-circular',
  templateUrl: './radial-circular.component.html',
  styleUrls: ['./radial-circular.component.scss']
})
export class RadialCircularComponent implements OnInit, AfterViewInit, OnChanges {
  @Input('progress') progress: number = 0;
  @ViewChild('radialProgress') radialProgress: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (!this.radialProgress.nativeElement) return;
    this.renderer.setAttribute(this.radialProgress.nativeElement, 'data-progress', `${this.progress}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.progress.firstChange) return;
    if (!this.radialProgress.nativeElement) return;
    this.renderer.setAttribute(this.radialProgress.nativeElement, 'data-progress', `${changes.progress.currentValue}`);
  }

  // randomize() {
  //   this.renderer.setAttribute(this.radialProgress.nativeElement, 'data-progress', `${Math.floor(Math.random() * 100)}`)
  // }

}
