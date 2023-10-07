document.addEventListener("DOMContentLoaded", function() {
    let table = document.querySelector("#data-table");
    let rows = Array.from(table.rows).slice(1); 
    let ascending = true; 

    let headerCells = table.rows[0].cells;
    for (let i = 0; i < headerCells.length; i++) {
        headerCells[i].addEventListener("click", function() {
            let columnIndex = this.cellIndex;
            rows.sort(function(a, b) {
                let aValue = a.cells[columnIndex].textContent;
                let bValue = b.cells[columnIndex].textContent;

                if (!isNaN(+(aValue)) && !isNaN(+(bValue))) {
                    return ascending ? +(aValue) - +(bValue) : +(bValue) - +(aValue);
                } else {
                    // console.log(aValue.localeCompare(bValue));
                    return ascending ? aValue.localeCompare(bValue): bValue.localeCompare(aValue);
                }
            });
            ascending = !ascending;
            let tbody = table.getElementsByTagName("tbody")[0];
            tbody.innerHTML = '';
            rows.forEach(function(row) {
                tbody.appendChild(row);
            });
        });
    }
});