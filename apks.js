const apks = [
    {
        nombre: "Spotify Premium Mod",
        imagen: "https://m.media-amazon.com/images/I/51rttY7a+9L.png",
        enlace: "https://cuty.io/SurfMods",
        categoria: ["Modded"]
    },
    {
        nombre: "FNAF",
        imagen: "https://play-lh.googleusercontent.com/Gfcc9CzKdfEk3AVt4Zz_2B4OIxWwZElsSQVeYWN5a9ik0l5jQKaAxi-0pAb_F6IszqAA=s75-rw",
        enlace: "https://cuty.io/FNAFSurMods",
        categoria: ["Juegos", "Terror", "Premium"]
    },
    {
        nombre: "FNAF 2",
        imagen: "https://play-lh.googleusercontent.com/GYcyLlHWoZumcal0WmDJJo2rCFyl3Y0mwXm0zaD-C9gC0PJGQMhzOKHfDUVlqSDlag=w240-h480-rw",
        enlace: "https://cuty.io/FNAF2SurfMod",
        categoria: ["Juegos", "Terror", "Premium"]
    },
    {
        nombre: "FNAF 3",
        imagen: "https://play-lh.googleusercontent.com/_HtZGydRSlnEhF6Lf6uVmtFRBpeS3kVra8qFj53C2LNhALNQNedFY9vMpDhlo_CYHpk=s75-rw",
        enlace: "https://cuty.io/FNAF3SurfMod",
        categoria: ["Juegos", "Premium", "Terror"]
    },
    {
        nombre: "FNAF 4",
        imagen: "https://lh3.googleusercontent.com/H3DMppPpyUvfQmGi8-v6rXe5quaq34lOlfwfokZEweu0-iMF_x-0P-kDAiUp2tNoJfQ=s75-rw",
        enlace: "https://cuty.io/FNAF4SurfMod",
        categoria: ["Juegos", "Premium", "Terror"]
    },
    {
        nombre: "Geometry Dash",
        imagen: "https://geometrydassh.com/wp-content/uploads/2024/11/Geometry-Dash-768x768.webp",
        enlace: "https://cuty.io/SurModsGeo",
        categoria: ["Juegos", "Premium"]
    },
    {
        nombre: "Incredibox",
        imagen: "https://image.winudf.com/v2/image1/Y29tLnNvZmFyc29nb29kLmluY3JlZGlib3guY25fMTY2Mjg3NDUwOV8wNDA/icon.png?w=100&fakeurl=1",
        enlace: "https://cuty.io/12Incredibox",
        categoria: ["Juegos", "Premium"]
    },
    {
        nombre: "Youtube Life",
        imagen: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXGB0YGBgYFx8YHRgfHR4dIB0dGhcbHiggHxolHRcYIjEhJykrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABNEAACAQIEAwYCBgcDCQcFAQABAgMEEQAFEiEGMUETIlFhcYEykQcUUqGxwSNCYnKCktEz4fAVNENzorKz0vEWJFN0k5TCJWNkg6NE/8QAGwEAAQUBAQAAAAAAAAAAAAAAAwABAgQFBgf/xABAEQABAwIDAwoFAwIFAwUAAAABAAIDBBESITEFQVETImFxgZGhscHwBhQy0eEzQvE0UiMkYnKyFcLSFkOCkqL/2gAMAwEAAhEDEQA/ALP0iceTSzSU1NI0cUZKMyHS0jA2bvDcICLbc7E7ggY06emAaHOGZWjBAAA5wzSErEm5Nz1J/ri0VaRKhTrgLk5KKIcCKQWSDDBOtsurCvcCrf03wnNBzTkKHMInVrsLXxJpG5SaRZbfWBJYMVSw5gc8NbDonGSt5a8ek2uWtz6DA33uim56lTlOx9MSCsK3l690YG85oL9U0ZQg0nle1wSbW/rgJVSW4IW0kzXJvz54ZOGiyv8AYiU2ZWY6e7p9BzPhh72Ve+DTLNT1E7tCysVBFhp6kC29/bC3qDY2tkDhfrVKWhcKpY31Dbe5GHujNkaS",
        enlace: "https://cuty.io/YouTubeLife",
        categoria:  ["Premium", "Juegos"]
    }
];

// Agrupar juegos por categorías
const categorias = {};

apks.forEach(apk => {
    apk.categoria.forEach(c => {
        if (!categorias[c]) {
            categorias[c] = [];
        }
        categorias[c].push(apk);
    });
});

// Log para verificar si las categorías se están generando correctamente
console.log(categorias);

// Crear HTML dinámico
const container = document.getElementById("apk-container");

// Verifica si el contenedor existe
if (!container) {
    console.log("El contenedor con id 'apk-container' no se encuentra.");
} else {
    console.log("Contenedor encontrado correctamente.");
}

Object.entries(categorias).forEach(([categoria, lista]) => {
    // Solo agregar categorías que tengan al menos un juego
    if (lista.length > 0) {
        console.log(`Generando categoría: ${categoria}`);  // Verifica si está entrando en cada categoría

        const section = document.createElement("section");
        section.classList.add("categoria-section");

        const title = document.createElement("h3");
        title.classList.add("categoria-title");
        title.textContent = categoria;
        section.appendChild(title);

        const listaContainer = document.createElement("div");
        listaContainer.classList.add("Recomendado");

        lista.forEach(apk => {
            console.log(`Generando APK: ${apk.nombre}`);  // Verifica si está generando cada APK

            const card = document.createElement("div");
            card.className = "apk-card";

            card.innerHTML = `
                <img src="${apk.imagen}" alt="${apk.nombre}" class="apk-img">
                <a href="${apk.enlace}" class="apk-download">${apk.nombre}</a>
            `;
            listaContainer.appendChild(card);
        });

        section.appendChild(listaContainer);
        container.appendChild(section);
    } else {
        console.log(`No hay juegos en la categoría: ${categoria}`);  // Verifica si no hay categorías vacías
    }
});
