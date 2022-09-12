leftwristX = 0;

rightwristX = 0;

difference=0;

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
    textSize(difference);
    document.getElementById("font-size").innerHTML = "The Font Size Is: " + difference;
    fill("blue");
    text('Hello World', 200,200);
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        console.log(leftwristX);
        rightwristX = results[0].pose.rightWrist.x;
        console.log(rightwristX);
        difference = floor(leftwristX-rightwristX);
    }
}

