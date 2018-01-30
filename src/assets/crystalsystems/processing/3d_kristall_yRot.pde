var miller_id = 0

//          [ x ,  y,   z ]

// --- back nodes ---
var node0 = [100, 100, -100];
var node1 = [100, -100,  -100];
var node2 = [-100,  -100, -100];
var node3 = [-100,  100,  -100];

// --- bottom nodes ---
var node4 = [100, 100, -100];
var node5 = [100, 100,  100];
var node6 = [-100,  100, 100];
var node7 = [-100,  100,  -100];

// --- top nodes ---
var node8 = [100, -100, -100];
var node9 = [100, -100,  100];
var node10 = [-100,  -100, 100];
var node11 = [-100,  -100,  -100];

// --- right nodes ---
var node12 = [100, 100, -100];
var node13 = [100, 100,  100];
var node14 = [100,  -100, 100];
var node15 = [100,  -100,  -100];

// --- left nodes ---
var node16 = [-100, 100, -100];
var node17 = [-100, 100,  100];
var node18 = [-100,  -100, 100];
var node19 = [-100,  -100,  -100];

// --- front nodes ---
var node20 = [100, 100, 100];
var node21 = [100, -100,  100];
var node22 = [-100,  -100, 100];
var node23 = [-100,  100,  100];



var nodes = [node0, node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22, node23]

// Rotate shape around the x-axis = x coordinate doesnt change
var rotateX3D = function(theta) {
    var sinTheta = sin(theta);
    var cosTheta = cos(theta);
    
    for (var n=0; n<nodes.length; n++) {
        var node = nodes[n];
        var y = node[1];
        var z = node[2];
        node[1] = y * cosTheta - z * sinTheta;
        node[2] = z * cosTheta + y * sinTheta;
    }
};


// Rotate shape around the y-axis = y coordinate doesnt change
var rotateY3D = function(theta) {
    var sinTheta = sin(theta);
    var cosTheta = cos(theta);
    
    for (var n=0; n<nodes.length; n++) {
        var node = nodes[n];
        var x = node[0];
        var z = node[2];
        node[0] = x * cosTheta - z * sinTheta;
        node[2] = z * cosTheta + x * sinTheta;
    }
};


document.getElementById('100').onclick = function() {
  miller_id = 100;
};
document.getElementById('110').onclick = function() {
  miller_id = 110;
};
document.getElementById('111').onclick = function() {
  miller_id = 111;
};
document.getElementById('reset').onclick = function() {
  miller_id = 0;
};


var draw_objects() {
    
    // ---- draw 111 millersche Indize
    if (miller_id == 111) {
    
        fill(20, 200, 100);
        
        beginShape()
        vertex(node0[0], node0[1], node0[2]);
        vertex(node2[0], node2[1], node2[2]);
        vertex(node14[0], node14[1], node14[2]);
        vertex(node0[0], node0[1], node0[2]);
        endShape()
    }
    
    // ---- draw 110 millersche Indize
    if (miller_id == 110) {
    
        fill(20, 200, 100);
        
        beginShape()
        vertex(node0[0], node0[1], node0[2]);
        vertex(node1[0], node1[1], node1[2]);
        vertex(node10[0], node10[1], node10[2]);
        vertex(node6[0], node6[1], node6[2]);
        vertex(node0[0], node0[1], node0[2]);
        endShape()
    }
    
    // ---- back square ---
    if (miller_id == 100) {
        fill(20, 200, 100);
    } else {
     noFill();
    }
    
    beginShape();

    vertex(node0[0], node0[1], node0[2]);
    vertex(node1[0], node1[1], node1[2]);
    vertex(node2[0], node2[1], node2[2]);
    vertex(node3[0], node3[1], node3[2]);
    vertex(node0[0], node0[1], node0[2]);

    endShape();
    
    // ---- bottom squere ---
    
    
    noFill()
    beginShape()
    
    vertex(node4[0], node4[1], node4[2]);
    vertex(node5[0], node5[1], node5[2]);
    vertex(node6[0], node6[1], node6[2]);
    vertex(node7[0], node7[1], node7[2]);
    vertex(node4[0], node4[1], node4[2]);
    
    endShape()
    
    // ---- top square ---
    beginShape()
    
    vertex(node8[0], node8[1], node8[2]);
    vertex(node9[0], node9[1], node9[2]);
    vertex(node10[0], node10[1], node10[2]);
    vertex(node11[0], node11[1], node11[2]);
    vertex(node8[0], node8[1], node8[2]);
    
    endShape()
    
    // ---- right square ---
    beginShape()
    
    vertex(node12[0], node12[1], node12[2]);
    vertex(node13[0], node13[1], node13[2]);
    vertex(node14[0], node14[1], node14[2]);
    vertex(node15[0], node15[1], node15[2]);
    vertex(node12[0], node12[1], node12[2]);   
    
    endShape()
    
    // ---- left square ---
    beginShape()
    
    vertex(node16[0], node16[1], node16[2]);
    vertex(node17[0], node17[1], node17[2]);
    vertex(node18[0], node18[1], node18[2]);
    vertex(node19[0], node19[1], node19[2]);
    vertex(node16[0], node16[1], node16[2]);   
    
    endShape()
    
    // ---- front square ---
    beginShape()
    
    vertex(node20[0], node20[1], node20[2]);
    vertex(node21[0], node21[1], node21[2]);
    vertex(node22[0], node22[1], node22[2]);
    vertex(node23[0], node23[1], node23[2]);
    vertex(node20[0], node20[1], node20[2]);
    
    endShape()
}


void setup() {
    
    size(400,400,OPENGL);
    
}

float mouse_x = 0.0;
float mouse_y = 0.0;

float rotx = 0.0;
float roty = 0.0;
    
void mousePressed() {
    
    mouse_x = mouseX;
    mouse_y = mouseY;
    
    rotx = (mouse_y/360.0)*-2*PI+PI;
    roty = (mouse_x/420.0)*2*PI-PI;

    setTimeout(function(){
        rotx = rotx*0.001;
        roty = roty*0.001;
    }, 3000);

    setInterval(setTime, 1000);

        function setTime()
        {
            ++totalSeconds;
            secondsLabel.innerHTML = pad(totalSeconds%60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
        }
  
    };


// the draw() functions executes every millisecond
void draw() {
    
    noFill();
    background(255);
    
   
    
    
    
    //float rotz = 0*PI/36;
    //float roty = 3*PI/36;

    translate(200, 200, P3D);
    draw_objects();

    rotateY3D(roty*0.007);
    rotateX3D(rotx*0.007);

}

