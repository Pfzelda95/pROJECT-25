class db{

    constructor(x,y,width,height){
      var options = {
        isStatic:true
    }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprite/dustbin.png")
        
        World.add(world, this.body);

      }
      display(){
        var pos =this.body.position;
        
        imageMode(BOTTOM);
        image(this.image,pos.x,pos.y,100,100,this.height);

        
        
        
      }
     
}
    















