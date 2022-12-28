/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', storage);
var nextEntryId = [];
function storage(event) {
  var nextEntryIdJson = JSON.stringify(nextEntryId);
  localStorage.setItem('javascript-local-storage', nextEntryIdJson);
}

var previousInputs = localStorage.getItem('javascript-local-storage');

if (previousInputs !== null) {
  data = JSON.parse(previousInputs);
}
