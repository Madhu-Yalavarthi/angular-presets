import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-radial-circular',
  templateUrl: './radial-circular.component.html',
  styleUrls: ['./radial-circular.component.scss']
})
export class RadialCircularComponent implements OnInit{
  @Input('progress') progress: number = 0;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  // randomize() {
  //   this.renderer.setAttribute(this.radialProgress.nativeElement, 'data-progress', `${Math.floor(Math.random() * 100)}`)
  // }

}
