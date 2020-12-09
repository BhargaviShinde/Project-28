class Tree{
    constructor(){
        var options={
            isStatic: false,
        }

        this.body = Bodies.rectangle(650,450,270,600);
        this.image = loadImage("Plucking mangoes/tree.png"); 

    }

    display(){
        imageMode(CENTER)
        image(this.image,650,450,270,600)
    }
}