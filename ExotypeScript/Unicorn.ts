import {Animal} from "./Animal"

export class Unicorn extends Animal
{
  constructor(name:string)
  {
    super(name);
  }

  move(distance:number)
  {
    super.move(distance);
    console.log("Dancing on rainbow");
  }
}
