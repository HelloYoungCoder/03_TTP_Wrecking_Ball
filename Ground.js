class Ground {
    constructor(x, y, width, height){

        var groud_opt = {
            'isStatic': true
        };

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.groundObj = Bodies.rectangle(x, y, width, height, groud_opt);
        World.add(myworld, this.groundObj);

    }

    display() {
        var pos = this.groundObj.position;
        rectMode(CENTER);
        fill(196, 67, 75);
        rect(pos.x, pos.y, this.width, this.height);
    }
 }