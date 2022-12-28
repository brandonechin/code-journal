var $imageInput = document.querySelector('#photo-url');
var $imageSource = document.querySelector('img');
$imageInput.addEventListener('input', image);
function image(event) {
  $imageSource.setAttribute('src', event.target.value);
}

var $journalForm = document.querySelector('#journal-form');
$journalForm.addEventListener('submit', form);

function form(Event) {

  event.preventDefault();

  var inputValues =
    {
      title: document.querySelector('#title').value,
      photoUrl: document.querySelector('#photo-url').value,
      Notes: document.querySelector('#text-area').value,
      entryId: data.nextEntryId
    };

  if (event.target === $journalForm) {
    data.nextEntryId += 1;
  }

  data.entries.push(inputValues);

  $imageSource.setAttribute('src', 'images/placeholder-image-square.jpg');
  $journalForm.reset();
}
