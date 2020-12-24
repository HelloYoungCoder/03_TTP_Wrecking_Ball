class Block {
    constructor(x, y, width, height, color){
        var block_opt = {
            'restitution': 0.4,
            'friction': 0
        };

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        
        this.blockObj = Bodies.rectangle(x, y, width, height, block_opt);
        World.add(myworld, this.blockObj);
    }
    display() {

        var pos = this.blockObj.position;
        var angle = this.blockObj.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        noStroke();
        rect(0, 0, this.width, this.height);
        pop();
    }
}