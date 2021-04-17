class BaseClass{
    constructor(x,y,r){
        var options= {
          'restitution': 0.8,
          'friction': 0.1,
          'density': 1.0,
         ' isStatic':false,
        }
  
      this.x=x;
          this.y=y;
          this.r=r
          this.body=Bodies.circle(this.x, this.y, this.r, options)
      
  
      }
      display(){
        var angle = this.body.angle;
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(10,10,10);
        pop();
       
      }  
}