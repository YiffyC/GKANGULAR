export class Animal
{
    private name : string;

    //cstr
    constructor(name: string)
    {
        this.name = name;
    }

    public move(distance : number)
    {
      console.log(this.name + "a bougé de " + distance + " mètres.");
    }

}
