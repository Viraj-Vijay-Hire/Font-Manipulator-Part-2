left_wristX = 0;
right_wristX = 0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log("posenet is initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        left_wristX = results[0].pose.leftWrist.x;
        right_wristX = results[0].pose.rightWrist.x;
        console.log(left_wristX, right_wristX);
    }
}

