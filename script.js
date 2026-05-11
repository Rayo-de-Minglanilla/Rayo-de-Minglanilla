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
    'derbi-pesquera': {
        titulo: "Épica Victoria en el Derbi: El Rayo reina en los penaltis",
        fecha: "Derbi Comarcal - Temporada 2026",
        imagen: "foto-partido1.jpg.jpeg", // Esta es la foto que sale en la lista
        texto: `
            <p class="intro" style="font-size:1.1rem; font-weight:500; margin-bottom:15px;">Se respiraba aroma de las grandes citas en la <strong>Fuente del Recreo</strong>. Las gradas, abarrotadas por una afición volcada, presentaban un aspecto espectacular para recibir un derbi que prometía chispas desde el pitido inicial.</p>
            
            <div style="text-align:center; margin:20px 0; background:#f9f9f9; padding:10px; border-radius:10px;">
                <img src="foto-partido1.jpg.jpeg" style="max-width:100%; border-radius:5px;" alt="11 Titular">
                <p style="font-style:italic; font-size:0.85rem; color:#666; margin-top:5px;">11 titulares del Rayo de Minglanilla</p>
            </div>

            <p>El encuentro arrancó con respeto entre los dos equipos, aunque con el paso de los minutos las ocasiones llegaron del lado local. Conseguiríamos adelantarnos en el encuentro demostrando nuestra superioridad técnica, aunque La Pesquera supo sobreponerse y, con más fortuna que fútbol, logró darle la vuelta al marcador.</p>

            <p>En los últimos minutos, con un Rayo volcado totalmente al ataque y alentado por una afición heroica, conseguiríamos el premiado gol tras un claro penalti, igualando así el partido. Aunque lo seguiríamos intentando hasta el suspiro final, no pudimos perforar la portería rival de nuevo de forma injusta.</p>

            <h3 style="color:#7a1b2e; margin:20px 0 10px;">La batalla final: Los Penaltis</h3>
            <p>Así llegaríamos a los penaltis. Los nervios y la emoción se apoderaron de las gradas de la Fuente del Recreo. Pero nuestros jugadores solventaron la presión con una maestría absoluta, logrando un <strong>contundente 3-0</strong>.</p>
            
            <p>Cabe destacar el riguroso gol de penalti que el "árbitro" consideró que no entró, una decisión incomprensible que solo sirvió para hacer más épica nuestra victoria. ¡La justicia futbolística terminó dándole el triunfo al equipo que más lo buscó!</p>
            
            <div style="margin:25px 0; text-align:center; background:#000; padding:15px; border-radius:10px;">
                <video controls width="100%" style="border-radius:5px;">
                    <source src="video-partido.mp4" type="video/mp4">
                    Tu navegador no soporta vídeos.
                </video>
                <p style="color:#fff; font-size:0.9rem; margin-top:10px; font-weight:bold;">"Seguimos buscando el balón"</p>
            </div>

            <p style="font-weight:bold; border-left:4px solid #f1c40f; padding-left:15px; margin-top:20px;">Victoria incontestable. El derbi se queda en casa y Minglanilla celebra la casta de su equipo. ¡Aúpa Rayo!</p>
        `
    }
};

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