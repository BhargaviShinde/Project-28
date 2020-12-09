class Mango{
    constructor(x,y){
        var options ={
            isStatic:false,
            restution:0,
            friction:1
        }
        
        
        this.body = Bodies.circle(x,y,20,options);
        this.x = x;
        this.y= y;
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world, this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,50,50)
    }
}