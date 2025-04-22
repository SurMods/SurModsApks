const apks = [
    {
        nombre: "Spotify Premium",
        imagen: "https://m.media-amazon.com/images/I/51rttY7a+9L.png",
        enlace: "https://cuty.io/SurfMods",
        categoria: "Premium"
    },
    {
        nombre: "FNAF",
        imagen: "https://play-lh.googleusercontent.com/Gfcc9CzKdfEk3AVt4Zz_2B4OIxWwZElsSQVeYWN5a9ik0l5jQKaAxi-0pAb_F6IszqAA=s75-rw",
        enlace: "https://cuty.io/FNAFSurMods",
        categoria: "Juegos"
    },
    {
        nombre: "FNAF 2",
        imagen: "https://play-lh.googleusercontent.com/GYcyLlHWoZumcal0WmDJJo2rCFyl3Y0mwXm0zaD-C9gC0PJGQMhzOKHfDUVlqSDlag=w240-h480-rw",
        enlace: "https://cuty.io/FNAF2SurfMod",
        categoria: "Juegos"
    },
    {
        nombre: "FNAF 3",
        imagen: "https://play-lh.googleusercontent.com/_HtZGydRSlnEhF6Lf6uVmtFRBpeS3kVra8qFj53C2LNhALNQNedFY9vMpDhlo_CYHpk=s75-rw",
        enlace: "https://cuty.io/FNAF3SurfMod",
        categoria: "Juegos"
    },
    {
        nombre: "FNAF 4",
        imagen: "https://lh3.googleusercontent.com/H3DMppPpyUvfQmGi8-v6rXe5quaq34lOlfwfokZEweu0-iMF_x-0P-kDAiUp2tNoJfQ=s75-rw",
        enlace: "https://cuty.io/FNAF4SurfMod",
        categoria: "Juegos"
    },
        {
        nombre: "YouTube Vanced",
        imagen: "https://yt3.googleusercontent.com/ytc/AOPolaQc_MbnxXAXKac3gfF9pavK-CvFdpZTG3_4XjBN=s900-c-k-c0x00ffffff-no-rj",
        enlace: "https://cuty.io/YouTubeVanced",
        categoria: "Moddes"
    },
    {
        nombre: "YouTube Vanced",
        imagen: "https://yt3.googleusercontent.com/ytc/AOPolaQc_MbnxXAXKac3gfF9pavK-CvFdpZTG3_4XjBN=s900-c-k-c0x00ffffff-no-rj",
        enlace: "https://cuty.io/YouTubeVanced",
        categoria: "Juegos"
    }
];

// Agrupar APKs por categoría
const categorias = {};

apks.forEach(apk => {
    if (!categorias[apk.categoria]) {
        categorias[apk.categoria] = [];
    }
    categorias[apk.categoria].push(apk);
});

// Crear HTML dinámico
const container = document.getElementById("apk-container");

Object.entries(categorias).forEach(([categoria, lista]) => {
    const section = document.createElement("section");
    section.classList.add("categoria-section");

    const title = document.createElement("h3");
    title.classList.add("categoria-title");
    title.textContent = categoria;
    section.appendChild(title);

    const listaContainer = document.createElement("div");
    listaContainer.classList.add("Recomendado");

    lista.forEach(apk => {
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
});
