/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', storage);
function storage(event) {
  var dataJson = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', dataJson);
}

var previousInputs = localStorage.getItem('javascript-local-storage');

if (previousInputs !== null) {
  data = JSON.parse(previousInputs);
}
