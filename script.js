// 1. NAVEGACIÓN PRINCIPAL (Botones del menú)
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar-menu a');
    const sections = document.querySelectorAll('.content-section');
    const sidebar = document.getElementById('sidebar');
    const mobileBtn = document.getElementById('mobile-btn');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Si el enlace es a una sección interna (empieza por #)
            const targetId = link.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    // Ocultar todas las secciones
                    sections.forEach(s => s.classList.remove('active'));
                    // Mostrar la elegida
                    targetSection.classList.add('active');

                    // Actualizar botones activos
                    links.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');

                    // Cerrar menú en móvil tras click
                    if (sidebar) sidebar.classList.remove('open');
                    
                    // Volver al listado de crónicas si entramos en Resúmenes
                    if (targetId === '#resumenes') {
                        volverALista();
                    }
                }
            }
        });
    });

    // Menú móvil
    if (mobileBtn && sidebar) {
        mobileBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }
});

// 2. SISTEMA DE CRÓNICAS
const baseCronicas = {
    'derbi-pesquera': {
        titulo: "Épica Victoria en el Derbi: El Rayo reina en los penaltis",
        fecha: "Temporada 2026",
        texto: `
            <p>Se respiraba aroma de grandes citas en la Fuente del Recreo. El Rayo impuso su ley ante La Pesquera.</p>
            <p>Tras un empate agónico, ganamos 3-0 en penaltis. ¡El derbi se queda en casa!</p>
            <div style="margin:20px 0; background:#000; padding:10px; border-radius:10px;">
                <video controls width="100%">
                    <source src="video-partido.mp4" type="video/mp4">
                    Tu navegador no soporta vídeo.
                </video>
                <p style="color:white; font-size:0.8rem; text-align:center;">"Seguimos buscando el balón"</p>
            </div>
        `,
        imagen: "foto-partido1.jpg"
    }
};

// 3. FUNCIONES DE CRÓNICAS (Globales)
function abrirCronica(id) {
    const partido = baseCronicas[id];
    const lista = document.getElementById('lista-cronicas');
    const detalle = document.getElementById('detalle-cronica');
    const contenido = document.getElementById('contenido-cronica');

    if (partido && lista && detalle && contenido) {
        contenido.innerHTML = `
            <img src="${partido.imagen}" style="width:100%; border-radius:10px; margin-bottom:15px;">
            <h2 style="color:#7a1b2e;">${partido.titulo}</h2>
            <hr>
            <div style="margin-top:15px;">${partido.texto}</div>
        `;
        lista.style.display = 'none';
        detalle.style.display = 'block';
        window.scrollTo(0,0);
    }
}

function volverALista() {
    const lista = document.getElementById('lista-cronicas');
    const detalle = document.getElementById('detalle-cronica');
    if (lista && detalle) {
        lista.style.display = 'grid';
        detalle.style.display = 'none';
    }
}