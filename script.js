const etch = document.querySelector('.etch');

for (i=0; i<72; i++) {
    const grid = document.createElement('div');
    grid.classList = 'grid';
    etch.appendChild(grid);
}