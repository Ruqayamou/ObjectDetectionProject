img4 = "";
objects = [];
status = "";

function preload(){
    img4 = loadImage("mall.PNG")
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function modelLoaded(){
    console.log("Model is Loaded!");
    status = true;
    objectDetector.detect(img4, gotresults);
}

function gotresults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(img4, 0, 0, 640, 420);

    if(status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Objects detected";
            fill(255, 0, 0);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(255, 0, 0);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

