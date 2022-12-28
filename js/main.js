var $imageInput = document.querySelector('#photo-url');
var $imageSource = document.querySelector('img');
$imageInput.addEventListener('input', image);
function image(event) {
  // $imageSource.src = event.target.value;
  $imageSource.setAttribute('src', event.target.value);
}

var $journalForm = document.querySelector('#journal-form');
$journalForm.addEventListener('submit', form);
var nextEntryId = [];
function form(Event) {

  event.preventDefault();

  var entryId =
    {
      title: document.querySelector('#title').value,
      photoUrl: document.querySelector('#photo-url').value,
      Notes: document.querySelector('#text-area').value
    };
  $imageSource.setAttribute('src', 'images/placeholder-image-square.jpg');
  nextEntryId.push(entryId);
  $journalForm.reset();
}
