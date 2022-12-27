var $imageInput = document.querySelector('#photo-url');
var $imageSource = document.querySelector('img');
$imageInput.addEventListener('input', image);
function image(event) {
  $imageSource.src = event.target.value;
}
