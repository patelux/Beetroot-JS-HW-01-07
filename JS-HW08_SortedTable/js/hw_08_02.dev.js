"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var table = document.querySelector("#data-table");
  var rows = Array.from(table.rows).slice(1);
  var ascending = true;
  var headerCells = table.rows[0].cells;

  for (var i = 0; i < headerCells.length; i++) {
    headerCells[i].addEventListener("click", function () {
      var columnIndex = this.cellIndex;
      rows.sort(function (a, b) {
        var aValue = a.cells[columnIndex].textContent;
        var bValue = b.cells[columnIndex].textContent;

        if (!isNaN(+aValue) && !isNaN(+bValue)) {
          return ascending ? +aValue - +bValue : +bValue - +aValue;
        } else {
          // console.log(aValue.localeCompare(bValue));
          return ascending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
      });
      ascending = !ascending;
      var tbody = table.getElementsByTagName("tbody")[0];
      tbody.innerHTML = '';
      rows.forEach(function (row) {
        tbody.appendChild(row);
      });
    });
  }
});