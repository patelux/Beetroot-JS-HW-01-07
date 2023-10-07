const angle = document.querySelector('.angle');
const border = document.querySelector('.border');

let computedStyles = getComputedStyle(border);
let borderWigth = parseInt(computedStyles.width);
let borderHeight = parseInt(computedStyles.height);

let xStart,
    yStart,
    xEnd,
    yEnd,
    diffX,
    diffY;

function pointerMove(event){
    xEnd = event.x;
    yEnd = event.y;

    diffX = xEnd - xStart;
    diffY = yEnd - yStart;

    if(diffX > 0){
        border.style.width = borderWigth + diffX +'px'
    }
    if(diffY > 0){
        border.style.height = borderHeight + diffY +'px'
    }

    document.addEventListener('pointerup', function() {
        document.removeEventListener('pointermove', pointerMove);
    })
}
function pointerDown(event) {
    xStart = event.x;
    yStart = event.y;
    document.addEventListener('pointermove', pointerMove);
}
angle.addEventListener('pointerdown', pointerDown);