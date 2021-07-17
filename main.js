function preload() {

}
function setup() {
    canvas = createCanvas(397, 298);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(397, 298);
    video.hide();
}
function draw() {
    canvas.center();
    image(video, 0, 0, 397, 298);
}