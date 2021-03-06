class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            angularStiffness: 1,
            length: 200
        };

        this.pointB = pointB;

        this.sling = Constraint.create(options);
        World.add(myworld, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            push();
            strokeWeight(3);
            stroke(153, 168, 194);

            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
}