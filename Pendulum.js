class Pendulum {

    constructor(x, y, color){

        var options = {
            'restitution': 1,
            'friction': 0,
            'frictionAir': 0.0,
            'slop': 1,
            'inertia': Infinity
        };

        this.body = Bodies.rectangle(x, y, 70, 70, options);

        this.x = x;
        this.y = y;
        this.color = color;

        World.add(myworld,this.body);

    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();//Save current setting & transformation
        translate(pos.x,pos.y);//Change from origin to x any y position
        rotate(angle);//Rotate objects 
        rectMode(CENTER);
        strokeWeight(3);
        stroke(153, 168, 194);
        fill(this.color);
        ellipse(0,0,70,70);//Set to origin
        pop();//restore the settings

    }

}