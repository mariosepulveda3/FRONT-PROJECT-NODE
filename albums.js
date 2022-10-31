const albums$$ = document.querySelector('.albums');

const requestBand = () => {
    fetch("http://localhost:3000/discography/")
    .then((res) => res.json())
    .then((albums) => paint(albums));
}

const paint = (albums) => {
    for (const album of albums) {
        const album$$ = document.createElement('div');
        const title$$ = document.createElement('h3');
        const img$$ = document.createElement('img');

        album$$.classList.add('album');
        title$$.textContent = album.title;
        img$$.src = album.img;

        album$$.appendChild(title$$);
        album$$.appendChild(img$$);
        albums$$.appendChild(album$$);
    }
};

requestBand();