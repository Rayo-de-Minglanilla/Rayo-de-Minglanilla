document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar-menu a');
    const sections = document.querySelectorAll('.content-section');
    const sidebar = document.getElementById('sidebar');
    const mobileBtn = document.getElementById('mobile-btn');

    // Navegación
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                sections.forEach(s => s.classList.remove('active'));
                document.querySelector(targetId).classList.add('active');
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                if (sidebar) sidebar.classList.remove('open');
                if (targetId === '#resumenes') volverALista();
            }
        });
    });

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
    }
});

// BASE DE DATOS COMPLETA
const baseCronicas = {
   texto: `
    <p class="intro" style="font-size:1.1rem; font-weight:500; margin-bottom:15px;">Hay partidos que se ganan con fútbol y otros que se ganan con el escudo. El derbi en la <strong>Fuente del Recreo</strong> fue de los segundos. Ante una afición entregada, el Rayo demostró por qué en Minglanilla no se rinde nadie.</p>
    
    <div style="text-align:center; margin:20px 0; background:#f9f9f9; padding:10px; border-radius:10px;">
        <img src="foto-partido1.jpg" style="max-width:100%; border-radius:5px;" alt="11 Titular">
        <p style="font-style:italic; font-size:0.85rem; color:#666; margin-top:5px;">Los 11 guerreros que defendieron el orgullo local.</p>
    </div>

    <p>El encuentro comenzó con la tensión propia de un derbi, con un Rayo dominador pero que se encontró con un jarro de agua fría tras el descanso. En una acción aislada, el árbitro señaló un penalti a favor de La Pesquera con el que lograron adelantarse. Pero si algo tiene este equipo es fe; el Rayo no tardó en reaccionar y, tras un asedio constante, logramos el empate que hacía justicia a lo visto en el campo.</p>

    <p>Cuando parecía que el partido estaba controlado, la crueldad del fútbol apareció en los minutos finales: La Pesquera se ponía 1-2 en el marcador. Con el tiempo casi cumplido y el rival ya celebrando una victoria que no merecía, el Rayo sacó el orgullo de Minglanilla. En un ataque desesperado, forzamos un penalti clarísimo que convertimos para poner el 2-2 definitivo, desatando la locura en las gradas.</p>

    <h3 style="color:#7a1b2e; margin:20px 0 10px;">Justicia Divina en los Penaltis</h3>
    <p>Llegamos a la tanda con la moral por las nubes y el rival hundido. El resultado fue un <strong>contundente 3-0</strong> que deja claro quién manda. Ni siquiera el "error" arbitral al anularnos un penalti que entró claramente pudo empañar la fiesta. Los penaltis de La Pesquera todavía están aterrizando en los campos vecinos.</p>
    
    <div style="margin:25px 0; text-align:center; background:#000; padding:15px; border-radius:10px;">
        <video controls width="100%" style="border-radius:5px;">
            <source src="video-partido.mp4" type="video/mp4">
            Tu navegador no soporta vídeos.
        </video>
        <p style="color:#fff; font-size:0.9rem; margin-top:10px; font-weight:bold;">"Seguimos buscando el balón" - El 3-0 definitivo.</p>
    </div>

    <p style="font-weight:bold; border-left:4px solid #f1c40f; padding-left:15px; margin-top:20px;">Remontada, épica y lección de fútbol. Que tomen nota: en la Fuente del Recreo manda el Rayo. ¡Aúpa Minglanilla!</p>
`
    }


function abrirCronica(id) {
    const partido = baseCronicas[id];
    const lista = document.getElementById('lista-cronicas');
    const detalle = document.getElementById('detalle-cronica');
    const contenido = document.getElementById('contenido-cronica');

    if (partido) {
        contenido.innerHTML = `
            <h1 style="color:#7a1b2e; margin-bottom:5px;">${partido.titulo}</h1>
            <p style="color:#666; font-style:italic; margin-bottom:15px;">${partido.fecha}</p>
            <hr style="margin-bottom:20px; opacity:0.2;">
            <div class="texto-completo">${partido.texto}</div>
        `;
        lista.style.display = 'none';
        detalle.style.display = 'block';
        window.scrollTo(0, 0);
    }
}

function volverALista() {
    document.getElementById('lista-cronicas').style.display = 'grid';
    document.getElementById('detalle-cronica').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
    // FECHA EXACTA: 10 de agosto de 2025, 19:00:00
    // Nota: En JS, los meses van de 0 a 11 (Agosto es el mes 7)
    const fechaPaternidad = new Date(2025, 7, 10, 19, 0, 0); 
    
    function actualizarContador() {
        const ahora = new Date();
        const diferencia = ahora - fechaPaternidad;
        
        // Calculamos días, horas y minutos para que sea más humillante
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        
        const elemento = document.getElementById('contador-dias');
        if(elemento) {
            elemento.innerText = dias;
        }
    }

    // Ejecutar al cargar
    actualizarContador();
    
    // El resto de tu código de navegación (links.forEach...) sigue aquí abajo
});