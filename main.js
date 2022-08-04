function setup() {
    canvas = createCanvas(400,400);
    canvas.position(560,150);
    video = createCapture(VIDEO);
    video.size(500,500);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function draw() {
    background('#34ebd8');
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
    }
}