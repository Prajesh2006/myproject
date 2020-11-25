class coins{
    constructor(x,y){
       var option={
           isStatic:true
       }
        this.body=Bodies.rectangle(x,y,30,30,option)
        World.add(world,this.body)
        this.width=30
        this.height=30
        this.image=loadImage("coin.png")
    }
    display(){
        var pos=this.body.position;
        if(this.body.x-man1.body.x<this.body.width/2+man1.body.width/2){
            
        }
        image(this.image,pos.x,pos.y,this.width,this.height)
    }

}