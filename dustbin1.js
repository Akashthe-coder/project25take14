class Dustbin1 {
    constructor(x, y,w,h) {
        var options = {
            isStatic: true
        }
        this.width=w;
        this.height=h;
        this.image = loadImage("dustbingreen.png")
        this.body=Bodies.rectangle(x,y,w,h)
        World.add(world,this.body)
    }
    display() {
        var pos=this.body.position
        imageMode(CENTER);
        image(this.image,1300, 535, 250, 250)
       
    }

}
