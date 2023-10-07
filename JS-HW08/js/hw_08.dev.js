"use strict";

var editor = document.querySelector('#editor');
var isEditing = false;

function isCtrlPressed(event) {
  return event.ctrlKey || event.metaKey;
}

function enableEditMode() {
  editor.outerHTML = "<textarea id=\"editor\" rows=\"10\">".concat(editor.textContent, "</textarea>");
  editor = document.querySelector('#editor');
  editor.focus();
  var textLength = editor.textContent.length;
  editor.setSelectionRange(textLength, textLength);
  isEditing = true;
}

function saveChanges() {
  var editedtext = document.getElementById('editor').value;
  editor.outerHTML = "<div id=\"editor\">".concat(editedtext, "</div>");
  editor = document.querySelector('#editor');
  isEditing = false;
}

document.addEventListener('keydown', function (event) {
  if (isCtrlPressed(event) && event.key === 'e' && !isEditing) {
    event.preventDefault();
    enableEditMode();
  } else if (isCtrlPressed(event) && event.key === 's' && isEditing) {
    event.preventDefault();
    saveChanges();
  }
});