import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',

  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']

})
export class FrameComponent implements OnInit
{
  private nb:number;
  private nbGold:number = 12;

  constructor() { }

  ngOnInit() {
  }

}
