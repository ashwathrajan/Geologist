class Ball{
    constructor(x,y,r)
    {
        var options={
            friction:3,
            density:0.1,
            restitution:1
        }
    this.body = Bodies.circle(x,y,r,options);
    World.add(world,this.body);
    this.r = r;
    }

    display(){
        var ballpos = this.body.position;
        push();
        translate(ballpos.x,ballpos.y);
        strokeWeight(3);
        stroke("yellow")
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r)
        pop();
    }
}