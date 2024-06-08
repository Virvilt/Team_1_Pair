const libro1 = document.querySelector('.js__libro1');
const libro2 = document.querySelector('.js__libro2');
const button = document.querySelector('.js__btn');
const text = document.querySelector('.js__text');


button.addEventListener('click', (ev) => {
    //debugger;
    ev.preventDefault();
    const tituloLibro1 = libro1.value;
    const tituloLibro2 = libro2.value;
    const libros = [tituloLibro1, tituloLibro2];
    console.log(libros);
    for (const elemento of libros) {
        text.innerHTML += `<p>¡A mí también me encantó ${elemento}! Tenemos mucho en común, humana.</p>`
    }
});



