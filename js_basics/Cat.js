//------------------------- cat class ---------------------


export class Cat{
    constructor(name, color,  breed){
        this.name = name;
        this.color = color;
        this.breed = breed;
    }


 getCatInfo(){
    console.log(' Hello, the cats name is ' + this.name +  ' her color is '  + this.color + 'and the breed is ' + this.breed );
}

}