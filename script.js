const etch = document.querySelector('.etch');
const redraw = document.getElementById('regrid');
let rows;

function reGrid() {
    if (rows != undefined) {
        for (i=0 ; i < (rows*rows); i++) {
            const grid = document.querySelector('.grid');
            grid.remove();
        }
    }
    rows = parseInt(prompt("What number of rows?"));
    for (i=0; i<(rows*rows); i++) {
        const grid = document.createElement('div');
        grid.classList = 'grid';
        grid.style.height = `calc(100%/${rows}`;
        grid.style.width = `calc(100%/${rows}`;
        etch.appendChild(grid);
        grid.addEventListener('mouseover', event => {
            grid.style.backgroundColor = '#FFF000';
        })
    }
}

redraw.addEventListener('click', function() {
    let rows = reGrid();
    redraw.innerText = "Redraw";
    redraw.style = "font-size: 1.3rem; padding: 0.5em 1.5em;";
    etch.style = "display: flex;";
});
const grid = document.querySelectorAll('.grid');