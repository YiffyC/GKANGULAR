class Animal
{
    private name : string;

    //cstr
    constructor(name: string)
    {
        this.name = name;
    }

    public move(distance : number)
    {
      console.log("${this.name} a bougé de ${distance} mètres.");
    }

}


class Snake extends Animal
{

}


class Horse extends Animal
{

}



let rd = new Horse("Rainbow Dash");
let sam = new Snake("Sammy the snake");
