class Drops {
  constructor(x,y){
    var options= {
      'friction': 0.1,
    
    }

  this.x=x;
  this.y=y;
      this.body=Bodies.circle(this.x, this.y, 10, options);
      this.radius=5;
    //  World.add(world,this.body);
  

  }

  reposition(){
    if (this.body.position.y>height){
      Matter.Body.setPosition(this.body,{x:random(0,width),y:random(0,height)});
    }
  }

  display(){ 
    push();
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,5,5);
    pop();
  }  
}