class Paper {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.x=x;
      this.y=x;
      this.body =Bodies.circle(x, y,r,options);
      this.r=r;
      this.image=loadImage("paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle= this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle)
      imageMode(CENTER);
      image(this.image,0, 0, this.r+30, this.r+30);
      pop();
    }
  };

  