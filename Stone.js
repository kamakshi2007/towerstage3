class Stone {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 30, 30, options);
      this.width = 30;
      this.height = 30;
      this.image = loadImage("polygon.png");

      
      World.add(world, this.body);
    }
    display(){
      /*var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();*/
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)

    }
  };
  
