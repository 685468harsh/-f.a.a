
function preload () {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
}

function take_snapshot(){
   save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
    }
}