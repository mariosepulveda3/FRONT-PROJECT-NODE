const bands$$ = document.querySelector('.bands');

const requestBand = () => {
    fetch("http://localhost:3000/bands")
    .then((res) => res.json())
    .then((bands) => paint(bands));
}

const paint = (bands) => {
    for (const band of bands) {
        const band$$ = document.createElement('div');
        const name$$ = document.createElement('h3');
        const img$$ = document.createElement('img');

        band$$.classList.add('band');
        name$$.textContent = band.name;
        img$$.src = band.img;

        band$$.appendChild(name$$);
        band$$.appendChild(img$$);
        bands$$.appendChild(band$$);
    }
};

requestBand();