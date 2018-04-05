import { Component } from '@angular/core';

@Component
(
  {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
/*
  template:`
            <h1>My first Component</h1>
            <p>(c) GK 2017</p>
            <app-child></app-child>
            `,

  styles:  [`h1
            {
              color: darkred;
              text-align : center
            }
            `]
*/
}
)
export class AppComponent
{
  nom : string = "anon";
  //private nom : string = "Hello binôme (:";
  //title = 'app';

  title = "Working like a charm";

  public refresh(n : string)
  {
    this.nom = n;
  }

  //affichage dans la console
  public affichage()
  {
    console.log("Working like a charm");
  }


  //boucle cinema
  movies: string[] = ["Watchmen", "300", "Sucker Punch", "Man of steel"];

  
}
