import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-wall-paper',
  templateUrl: './background-wall-paper.component.html',
  styleUrls: ['./background-wall-paper.component.scss']
})
export class BackgroundWallPaperComponent implements OnInit {
  REACT_ICON = "assets/svg/react.svg";
  constructor() { }

  ngOnInit(): void {
  }

}
