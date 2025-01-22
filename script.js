const etch = document.querySelector('.etch');
const rows = parseInt(prompt("What number of rows?"));

for (i=0; i<(rows*rows); i++) {
    const grid = document.createElement('div');
    grid.classList = 'grid';
    grid.style.height = `calc(100%/${rows}`;
    grid.style.width = `calc(100%/${rows}`;
    etch.appendChild(grid);
}

const grid = document.querySelectorAll('.grid');