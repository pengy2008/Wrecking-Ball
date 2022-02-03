class Box{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.6,
            friction :0.4,
            isStatic : false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    display(){
        
    }
}