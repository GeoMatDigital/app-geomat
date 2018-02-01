void setup() {
    
    size(400,400,P3D);
    
    translate(200,200);

    background(255)
    
    fill(20, 200, 100)
    beginShape();
    
    vertex(100, 100, -180);
    vertex(100, -100, -180);
    vertex(-100, -100, 0);
    vertex(-100, 100, 0);
    vertex(100, 100, -180);

    endShape();
    
}