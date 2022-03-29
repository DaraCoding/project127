encanto = "";
sing2 = "";

function preload() {
    encatno = loadSound("AllOfYou.mp3");
    sing2 = loadSound("CouldHaveBeenMe.mp3");
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 500);

}

function music() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}