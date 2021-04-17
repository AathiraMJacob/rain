class Umbrella{
    constructor(x,y){
        var options= {
         ' isStatic':true,
        }
  
      this.x=x;
          this.y=y;
        
          this.body=Bodies.circle(this.x, this.y, 100, options)
          this.radius=100;
        //  World.add(world,this.body);
  
      }
      display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,5,5);
       
      }  
}