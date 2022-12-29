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

  var inputValues = {
    title: document.querySelector('#title').value,
    photoUrl: document.querySelector('#photo-url').value,
    notes: document.querySelector('#text-area').value,
    entryId: data.nextEntryId
  };

  data.nextEntryId += 1;

  data.entries.unshift(inputValues);

  $imageSource.setAttribute('src', 'images/placeholder-image-square.jpg');
  $journalForm.reset();
}
var ul = document.querySelector('ul');
function renderEntry(entry) {
  var li = document.createElement('li');
  li.setAttribute('class', 'row');
  var div = document.createElement('div');
  div.setAttribute('class', 'column-half');
  li.appendChild(div);
  var img = document.createElement('img');
  img.setAttribute('src', entry.photoUrl);
  div.appendChild(img);
  var secondDiv = document.createElement('div');
  secondDiv.setAttribute('class', 'column-half');
  li.appendChild(secondDiv);
  var h2 = document.createElement('h2');
  h2.appendChild(document.createTextNode(entry.title));
  secondDiv.appendChild(h2);
  var paragraph = document.createElement('p');
  paragraph.appendChild(document.createTextNode(entry.notes));
  secondDiv.appendChild(paragraph);
  return li;
}
document.addEventListener('DOMContentLoaded', tree);
function tree(event) {
  for (let i = 0; i < data.entries.length; i++) {
    ul.appendChild(renderEntry(data.entries[i]));
  }
}

// var $paragraph = document.querySelector('#no-entry');
// var $hidden = document.querySelector('.hidden');
// function toggleNoEntries(event) {
//   $hidden.className('');
//   $paragraph.className('hidden');
// }

// function viewSwap(viewtype) {
//   data.view[viewtype];
// }
