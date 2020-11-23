class house{
    constructor(x,y){
      this.image=loadImage("house.jpg")
      this.x=x
      this.y=y
    }
    display(){
      image(this.image,this.x,this.y,200,200)
    }
}