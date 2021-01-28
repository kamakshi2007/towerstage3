class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("tin transparent.png");
    this.Visibility = 255;
    
    
    World.add(world, this.body);
  }
  
  display(){
   //console.log(this.Visibility);
    if(this.body.speed<4){
      
    
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      
    }
    else{
      World.remove(world,this.body);
     if(this.Visibility>0){
      push();
      this.Visibility=this.Visibility-20;
      tint(255,this.Visibility);
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      
      pop();
     }
    }
  }
  score(){
    if(this.Visibility<100 && this.Visibility >0){
      score++
    }
}
}
