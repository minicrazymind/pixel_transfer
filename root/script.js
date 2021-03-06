// This uses a pre-trained model of The Great Wave off Kanagawa and Udnie (Young American Girl, The Dance)
let inputImg;
let statusMsg;
let transferBtn;
let style1;
let resultImage;

function setup() {
  noCanvas();
  // Status Msg
  statusMsg = select('#statusMsg');

  // Get the input image
  inputImg = select('#inputImg');

  // Transfer Button
  transferBtn = select('#transferBtn');
  transferBtn.mousePressed(transferImages);

  // Create two Style methods with different pre-trained models
  style1 = ml5.styleTransfer('models/pixels', modelLoaded);
}
// A function to be called when the models have loaded
function modelLoaded() {
  // Check if both models are loaded
  if (style1.ready) {
    statusMsg.html('Ready!');
  }
}
// Apply the transfer to both images!
function transferImages() {
  statusMsg.html('Applying Style Transfer...!');

  style1.transfer(inputImg, function (err, result) {
    resultImage = createImg(result.src).parent('styleA');
    resultImage.save('result','jpg')
  });

  statusMsg.html('Done!');
}
