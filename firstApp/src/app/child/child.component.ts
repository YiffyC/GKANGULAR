import { Component, OnInit } from '@angular/core';

@Component
(
  {
    selector: 'app-child',
    /*
    templateUrl: ['./child.component.html'],
    styleUrls: ['./child.comonent.css'],
    */

    template:
              `
                <h1>My second Component</h1>
              `,
    styles:
            [`
              h1
                {
                  color : green;
                }
            `]
    


  }
)
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit()
  {

  }

}
