"use strict";

var angle = document.querySelector('.angle');
var border = document.querySelector('.border');
var computedStyles = getComputedStyle(border);
var borderWigth = parseInt(computedStyles.width);
var borderHeight = parseInt(computedStyles.height);
var xStart, yStart, xEnd, yEnd, diffX, diffY;

function pointerMove(event) {
  xEnd = event.x;
  yEnd = event.y;
  diffX = xEnd - xStart;
  diffY = yEnd - yStart;

  if (diffX > 0) {
    border.style.width = borderWigth + diffX + 'px';
  }

  if (diffY > 0) {
    border.style.height = borderHeight + diffY + 'px';
  }

  document.addEventListener('pointerup', function () {
    document.removeEventListener('pointermove', pointerMove);
  });
}

function pointerDown(event) {
  xStart = event.x;
  yStart = event.y;
  document.addEventListener('pointermove', pointerMove);
}

angle.addEventListener('pointerdown', pointerDown);