class Stone{
    constructor(x,y,r)
{
    var option={
        density:14,
        restitution:0.1,
        friction:3
    }
    this.body = Bodies.circle(x,y,r,option)
    this.r = r;
    World.add(world,this.body)
}
    display(){
        var stonepos = this.body.position;
        push();
        translate(stonepos.x,stonepos.y);
        fill("black");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r)
        pop();
    }


}