import {Animal} from "./Animal"

export class Snake extends Animal
{
  constructor(name:string)
  {
    super(name);
  }

  move(distance:number)
  {
    super.move(distance);
    console.log("Glissant");
  }

}
