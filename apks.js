const apks = [
    {
        nombre: "Spotify Premium",
        imagen: "https://m.media-amazon.com/images/I/51rttY7a+9L.png",
        enlace: "https://cuty.io/SurfMods"
    },
    {
        nombre: "FNAF",
        imagen: "https://play-lh.googleusercontent.com/Gfcc9CzKdfEk3AVt4Zz_2B4OIxWwZElsSQVeYWN5a9ik0l5jQKaAxi-0pAb_F6IszqAA=s75-rw",
        enlace: "https://cuty.io/FNAFSurMods"
    },
    {
        nombre: "FNAF 2",
        imagen: "https://play-lh.googleusercontent.com/GYcyLlHWoZumcal0WmDJJo2rCFyl3Y0mwXm0zaD-C9gC0PJGQMhzOKHfDUVlqSDlag=w240-h480-rw",
        enlace: "https://cuty.io/FNAF2SurfMod"
    },
    {
        nombre: "FNAF 3",
        imagen: "https://play-lh.googleusercontent.com/_HtZGydRSlnEhF6Lf6uVmtFRBpeS3kVra8qFj53C2LNhALNQNedFY9vMpDhlo_CYHpk=s75-rw",
        enlace: "https://cuty.io/FNAF3SurfMod"
    },
    {
        nombre: "FNAF 4",
        imagen: "https://lh3.googleusercontent.com/H3DMppPpyUvfQmGi8-v6rXe5quaq34lOlfwfokZEweu0-iMF_x-0P-kDAiUp2tNoJfQ=s75-rw",
        enlace: "https://cuty.io/FNAF4SurfMod"
    }
];

// Insertar dinámicamente los APKs
const container = document.getElementById("apk-container");

apks.forEach(apk => {
    const card = document.createElement("div");
    card.className = "apk-card";

    card.innerHTML = `
        <img src="${apk.imagen}" alt="${apk.nombre}" class="apk-img">
        <a href="${apk.enlace}" class="apk-download">${apk.nombre}</a>
    `;

    container.appendChild(card);
});
const apks = [
    {
        nombre: "Spotify Premium",
        imagen: "https://m.media-amazon.com/images/I/51rttY7a+9L.png",
        enlace: "https://cuty.io/SurfMods"
    },
    {
        nombre: "FNAF",
        imagen: "https://play-lh.googleusercontent.com/Gfcc9CzKdfEk3AVt4Zz_2B4OIxWwZElsSQVeYWN5a9ik0l5jQKaAxi-0pAb_F6IszqAA=s75-rw",
        enlace: "https://cuty.io/FNAFSurMods"
    },
    {
        nombre: "FNAF 2",
        imagen: "https://play-lh.googleusercontent.com/GYcyLlHWoZumcal0WmDJJo2rCFyl3Y0mwXm0zaD-C9gC0PJGQMhzOKHfDUVlqSDlag=w240-h480-rw",
        enlace: "https://cuty.io/FNAF2SurfMod"
    },
    {
        nombre: "FNAF 3",
        imagen: "https://play-lh.googleusercontent.com/_HtZGydRSlnEhF6Lf6uVmtFRBpeS3kVra8qFj53C2LNhALNQNedFY9vMpDhlo_CYHpk=s75-rw",
        enlace: "https://cuty.io/FNAF3SurfMod"
    },
    {
        nombre: "FNAF 4",
        imagen: "https://lh3.googleusercontent.com/H3DMppPpyUvfQmGi8-v6rXe5quaq34lOlfwfokZEweu0-iMF_x-0P-kDAiUp2tNoJfQ=s75-rw",
        enlace: "https://cuty.io/FNAF4SurfMod"
    }
];

// Insertar dinámicamente los APKs
const container = document.getElementById("apk-container");

apks.forEach(apk => {
    const card = document.createElement("div");
    card.className = "apk-card";

    card.innerHTML = `
        <img src="${apk.imagen}" alt="${apk.nombre}" class="apk-img">
        <a href="${apk.enlace}" class="apk-download">${apk.nombre}</a>
    `;

    container.appendChild(card);
});
