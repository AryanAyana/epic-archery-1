class CoumputerBase{
constructor(x,y,width,heigth) {
 var options = {
  isStatic: true
 };

 this.body = Bodies.rectangle(x,y,width,heigth,options);
 this.width = width;
 this.heigth = heigth;
 this.image = loadImage("./assets/base2.png");

World.add(world, this.body);
}
}