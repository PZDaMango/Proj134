img = "";

function preload() {
    img = loadImage('baby.jpeg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
  }

function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Baby", 165, 50);
    text("98%", 210, 50);
    noFill();
    stroke("#FF0000");
    rect(150, 20, 370, 350 );
}