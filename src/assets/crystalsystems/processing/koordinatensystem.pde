
void setup() {

    PFont font;

    font = loadFont("Arial.ttf"); 
    
    size(400,400,P3D);
    
    translate(200,200);

    background(255);
    
    fill(000);
    
    textFont(font); 
    
    String xA = "x-Achse";
    
    String yA = "y-Achse";

    text(xA, 50, -10, 50, 40, 100); 

    text(yA, 10, 50, 50, 40, 100);
    
    noFill();
    
    beginShape();
    
    vertex(0, 0, 0);
    vertex(100, 0, 0);

    endShape();
    
    
    beginShape();
    
    vertex(0, 0, 0);
    vertex(0, 100, 0);

    endShape();
    
    
    beginShape();
    
    vertex(0,0,0);
    vertex(0,0, 100);
    
    endShape();
    
    
    
}