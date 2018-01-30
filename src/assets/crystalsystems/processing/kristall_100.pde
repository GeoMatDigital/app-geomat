void setup() {
    
    size(400,400,OPENGL);
    
    translate(200,200);

    background(255)
    
    fill(20, 200, 100)
    beginShape();
    
    vertex(100, 100, 0);
    vertex(100, -100, 0);
    vertex(-100, -100, 0);
    vertex(-100, 100, 0);
    vertex(100,100,0);

    endShape();
    
    noFill()
    beginShape()
    
    vertex(100,100,0)    
    vertex(100,100, 100)
    vertex(-100,100,100)
    vertex(-100,100,0)
    
    endShape()
    
    beginShape()
    
    vertex(100,-100,0)    
    vertex(100,-100, 100)
    vertex(-100,-100,100)
    vertex(-100,-100,0)
    
    endShape()
    
    beginShape()
    
    vertex(100,100,100)    
    vertex(100,-100,100)
    
    endShape()
    
    beginShape()
    
    vertex(-100,100,100)    
    vertex(-100,-100,100)
    
    endShape()
}