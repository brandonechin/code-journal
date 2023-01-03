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

  viewSwap('entry-form');
  toggleNoEntries();

  $imageSource.setAttribute('src', 'images/placeholder-image-square.jpg');
  $journalForm.reset();

}

var ul = document.querySelector('ul');
function renderEntry(entry) {
  var li = document.createElement('li');
  li.setAttribute('class', 'row');
  li.setAttribute('data-entry-id', entry.entryId);
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
  var anchor = document.createElement('a');
  anchor.setAttribute('href', '#');
  anchor.setAttribute('id', 'edit');
  h2.appendChild(anchor);
  var fontAwesome = document.createElement('i');
  fontAwesome.setAttribute('class', 'fa fa-pencil');
  anchor.appendChild(fontAwesome);
  var paragraph = document.createElement('p');
  paragraph.appendChild(document.createTextNode(entry.notes));
  secondDiv.appendChild(paragraph);
  return li;
}

document.addEventListener('DOMContentLoaded', tree);

function tree(event) {
  for (let i = 0; i < data.entries.length; i++) {
    ul.append(renderEntry(data.entries[i]));
  }
}
document.addEventListener('DOMContentLoaded', toggleNoEntries);
var $noEntryParagraph = document.querySelector('#no-entry');

function toggleNoEntries(event) {
  if (data.entries.length === 0) {
    $noEntryParagraph.className = 'flex';
  } else {
    $noEntryParagraph.className = 'hidden';
  }
}

document.addEventListener('DOMContentLoaded', viewSwap);
var $h2 = document.querySelector('h2');
var $viewEntryForm = document.querySelector('#entry-form');
var $viewEntries = document.querySelector('#entries');
var $buttonToggleHeadingA = document.querySelector('#heading-a');
$buttonToggleHeadingA.addEventListener('click', click);
var $buttonToggleNew = document.querySelector('#new');
$buttonToggleNew.addEventListener('click', click);
var $editButton = document.querySelector('ul');
$editButton.addEventListener('click', click);

function viewSwap(viewtype) {
  data.view = viewtype;
  if (viewtype === 'entry-form') {
    $viewEntryForm.className = '';
  } else {
    $viewEntryForm.className = 'hidden';
  }
  if (viewtype === 'entries') {
    $viewEntries.className = '';
  } else {
    $viewEntries.className = 'hidden';
  }
}

function click(event) {
  if (event.target.matches('#heading-a')) {
    viewSwap('entries');
    $h2.textContent = 'Entries';
  }
  if (event.target.matches('#new')) {
    viewSwap('entry-form');
    $h2.textContent = 'New Entry';
  }
  if (event.target.closest('ul')) {
    viewSwap('entry-form');
    $h2.textContent = 'Edit Entry';
    var currentEntryId = event.target.closest('li');
    currentEntryId = Number(currentEntryId.getAttribute('data-entry-id'));
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === currentEntryId) {
        data.editing = data.entries[i];
        $journalForm.elements.title.value = data.editing.title;
        $journalForm.elements.photoUrl.value = data.editing.photoUrl;
        $journalForm.elements.notes.value = data.editing.notes;
      }
    }
  }
}
