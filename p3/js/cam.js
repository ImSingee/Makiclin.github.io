var capture;

function setup() {
  createCanvas(180, 220);
  capture = createCapture(VIDEO);
  capture.size(480, 280);
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 320, 240);
  filter('INVERT');


}

function mousePressed() {
saveFrames('out', 'png', 1, 25, function(data) {
  print(data);
});
}
