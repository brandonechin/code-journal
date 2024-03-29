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
    notes: document.querySelector('#notes').value,
    entryId: data.nextEntryId
  };

  data.nextEntryId += 1;

  data.entries.unshift(inputValues);
  if (data.editing === null) {
    viewSwap('entry-form');
  } else {
    for (let i = 0; i < data.entries.length; i++) {
      if (data.editing.entryId === data.entries[i].entryId) {
        data.entries[i] = data.entries[0];
      }
    }
    data.entries.shift();
  }
  viewSwap('entries');
  $h2.textContent = 'Entries';

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
  toggleNoEntries();
  viewSwap();
}

var $noEntryParagraph = document.querySelector('#no-entry');

function toggleNoEntries(event) {
  if (data.entries.length === 0) {
    $noEntryParagraph.className = 'flex';
  } else {
    $noEntryParagraph.className = 'hidden';
  }
}

var $h2 = document.querySelector('h2');
var $viewEntryForm = document.querySelector('#entry-form');
var $viewEntries = document.querySelector('#entries');
var $buttonToggleHeadingA = document.querySelector('#heading-a');
$buttonToggleHeadingA.addEventListener('click', toggleEntryForm);
var $buttonToggleNew = document.querySelector('#new');
$buttonToggleNew.addEventListener('click', toggleEntryForm);

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
  if (viewtype === 'entry-form') {
    data.editing = null;
    $deleteEntry.setAttribute('class', 'delete-entry hidden');
  }
}

function toggleEntryForm(event) {
  if (event.target.matches('#heading-a')) {
    viewSwap('entries');
    $h2.textContent = 'Entries';
  }
  if (event.target.matches('#new')) {
    viewSwap('entry-form');
    $h2.textContent = 'New Entry';
  }
}

var $editButton = document.querySelector('ul');
$editButton.addEventListener('click', editEntry);

function editEntry(event) {
  if (event.target.closest('li')) {
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

var $deleteEntry = document.querySelector('.delete-entry');
$editButton.addEventListener('click', deleteEntryShow);

function deleteEntryShow(event) {
  if (event.target.closest('li')) {
    $deleteEntry.setAttribute('class', 'delete-entry');
  }
}

var $modal = document.querySelector('.overlay');
$deleteEntry.addEventListener('click', showModal);
function showModal(event) {
  if (event.target.matches('.delete-entry')) {
    $modal.setAttribute('class', 'overlay');
  }
}

var $cancelButton = document.querySelector('.cancel-button');
$cancelButton.addEventListener('click', cancelButton);
function cancelButton(event) {
  if (event.target.matches('.cancel-button')) {
    $modal.setAttribute('class', 'overlay hidden');
  }
}
var $confirmButton = document.querySelector('.confirm-button');
$confirmButton.addEventListener('click', confirmButton);
var $li = document.querySelector('li');

function confirmButton(event) {
  if (event.target.matches('.confirm-button')) {
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === data.editing.entryId) {
        data.entries.splice(i, 1);
        $modal.setAttribute('class', 'overlay hidden');
        toggleNoEntries();
        viewSwap('entries');
        $li.remove();
      }
    }
  }
}
