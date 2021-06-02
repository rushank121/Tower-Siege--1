class BlackBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }
    display(){
        fill("black");
        super.display();
    }
}