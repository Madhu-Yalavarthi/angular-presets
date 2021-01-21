import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  options: any[] = [
    { name: 'Circular', route: '/progress/circular' },
    { name: 'Horizontal', route: '/progress/horizontal' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
