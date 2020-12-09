class Stone{
    constructor(x,y){
        var options={
            friction:1,
            density:1.2
        }

        this.body = Bodies.circle(x,y,10,options);
        this.x = x;
        this.y = y;
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world,this.body)

    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,this.x,this.y,40,40); 
        pop();
        
    }
}