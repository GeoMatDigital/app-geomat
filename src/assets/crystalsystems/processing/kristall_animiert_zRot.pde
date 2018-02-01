

var node0 = [100, 100, 0];
var node1 = [100, -100,  0];
var node2 = [-100,  -100, 0];
var node3 = [-100,  100,  0];

var nodes = [node0, node1, node2, node3]


// Rotate shape around the z-axis
var rotateZ3D = function(theta) {
    var sinTheta = sin(theta);
    var cosTheta = cos(theta);
    
    for (var n=0; n<nodes.length; n++) {
        var node = nodes[n];
        var x = node[0];
        var y = node[1];
        node[0] = x * cosTheta - y * sinTheta;
        node[1] = y * cosTheta + x * sinTheta;
    }
};


var draw_objects() {
    
    beginShape();
    
    vertex(node0[0], node0[1], node0[2]);
    vertex(node1[0], node1[1], node1[2]);
    vertex(node2[0], node2[1], node2[2]);
    vertex(node3[0], node3[1], node3[2]);
    vertex(node0[0], node0[1], node0[2]);

    endShape();


}


void setup(){

  size(400, 400, P3D);
  
  
  

}

void draw() {
  background(255);

// fill(20, 200, 100);    


float rotz = 3*PI/36;

translate(200, 200, P3D);
draw_objects();

rotateZ3D(rotz*0.005);
}