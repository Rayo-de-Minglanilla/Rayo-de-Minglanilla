// Asegúrate de que esto esté FUERA de cualquier otra función
const baseCronicas = {
    'derbi-pesquera': {
        titulo: "Épica Victoria en el Derbi: El Rayo reina en los penaltis",
        fecha: "Temporada 2026",
        texto: `
            <p>Se respiraba aroma de grandes citas en la Fuente del Recreo. El Rayo impuso su ley ante una Pesquera que solo pudo defenderse.</p>
            <p>Tras un empate agónico, llegamos a los penaltis donde ganamos 3-0. El arbitraje fue lamentable anulando un gol legal, pero la justicia divina nos dio la victoria.</p>
            <div style="margin:20px 0; background:#000; padding:10px; border-radius:10px;">
                <p style="color:white; font-size:0.8rem;">[Aquí aparecerá el vídeo cuando subas video-partido.mp4]</p>
            </div>
        `,
        imagen: "foto-partido1.jpg"
    }
};

function abrirCronica(id) {
    console.log("Intentando abrir crónica:", id); // Esto nos dirá en la consola si funciona
    const partido = baseCronicas[id];
    
    const lista = document.getElementById('lista-cronicas');
    const detalle = document.getElementById('detalle-cronica');
    const contenido = document.getElementById('contenido-cronica');

    if (partido && lista && detalle && contenido) {
        contenido.innerHTML = `
            <img src="${partido.imagen}" style="width:100%; border-radius:10px; margin-bottom:15px;">
            <h2 style="color:#7a1b2e;">${partido.titulo}</h2>
            <p><small>${partido.fecha}</small></p>
            <hr>
            <div style="margin-top:15px;">${partido.texto}</div>
        `;
        
        lista.style.display = 'none';
        detalle.style.display = 'block';
        window.scrollTo(0,0);
    } else {
        console.error("Error: No se encontró el partido o los elementos de la web");
    }
}

function volverALista() {
    document.getElementById('lista-cronicas').style.display = 'grid';
    document.getElementById('detalle-cronica').style.display = 'none';
}