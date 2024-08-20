let items = document.querySelectorAll('.carousel .carousel-item');

items.forEach((e) => {
    const minPerSlide = 3;
    let next = e.nextElementSibling;

    for (let i = 1; i < minPerSlide; i++) {
        if (!next) {
            next = items[0]; // Volver al primer item si no hay más
        }
        let cloneChild = next.cloneNode(true);
        e.querySelector('.row').appendChild(cloneChild.children[0]); // Clonar el contenido del siguiente item dentro del row
        next = next.nextElementSibling;
    }
});

