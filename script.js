const etch = document.querySelector('.etch');
const redraw = document.getElementById('regrid');
let drawn = false;
let rows;

function randomColor() {
    let hexValue = Math.floor(Math.random() * 4096);
    let hexString = "#" + hexValue.toString(16);
    return hexString;
}

function reGrid() {
    if (drawn === true) {
        for (i=0 ; i < (rows*rows); i++) {
            const grid = document.querySelector('.grid');
            grid.remove();
        }
    }
    rows = parseInt(prompt("What number of rows? (limit: 100)"));
    if ((rows <= 100) && (typeof rows === "number")) {
        drawn = true;
        for (i=0; i<(rows*rows); i++) {
            const grid = document.createElement('div');
            grid.classList = 'grid';
            grid.style.height = `calc(100%/${rows}`;
            grid.style.width = `calc(100%/${rows}`;
            grid.style.backgroundColor = randomColor();
            etch.appendChild(grid);
            let opacity = 0;
            grid.addEventListener('mouseover', event => {
                opacity += 0.25;
                grid.style.opacity = opacity.toString();
                // console.log(randomColor());
    
            })
        }
    } else {
        alert("that's not a valid value!")
        reGrid();
    }
}


redraw.addEventListener('click', function() {
    reGrid();
    redraw.innerText = "Redraw";
    redraw.style = "font-size: 1.3rem; padding: 0.5em 1.5em;";
    etch.style = "display: flex;";
});

redraw.addEventListener('mouseover', function() {
    redraw.style.backgroundColor = randomColor();
    redraw.style.color = randomColor();
});
