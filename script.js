document.addEventListener('DOMContentLoaded', () => {
    // 1. CONTADOR DE PATERNIDAD (10 de agosto, 2025 - 19:00)
    const fechaPaternidad = new Date(2025, 7, 10, 19, 0, 0); 
    
    function actualizarContador() {
        const ahora = new Date();
        const diferencia = ahora - fechaPaternidad;
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const elemento = document.getElementById('contador-dias');
        if(elemento) elemento.innerText = dias;
    }
    actualizarContador();

    // 2. NAVEGACIÓN DEL MENÚ (CORREGIDA PARA NUEVAS SECCIONES)
    const links = document.querySelectorAll('.sidebar-menu a');
    const sidebar = document.getElementById('sidebar');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                // IMPORTANTE: Seleccionamos todas las secciones actuales
                const allSections = document.querySelectorAll('.content-section');

                if (targetSection) {
                    // Ocultar todas las secciones
                    allSections.forEach(s => {
                        s.classList.remove('active');
                        s.style.display = 'none';
                    });

                    // Mostrar la sección destino
                    targetSection.classList.add('active');
                    targetSection.style.display = 'block';

                    // Actualizar estado visual del menú
                    links.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');

                    // Cerrar menú lateral en móvil
                    if (sidebar) sidebar.classList.remove('open');
                    
                    // Si vamos a resúmenes, nos aseguramos de ver la lista y no una crónica abierta
                    if (targetId === 'resumenes') volverALista();
                    
                    window.scrollTo(0, 0);
                }
            }
        });
    });

    // 3. LÓGICA DEL BOTÓN MÓVIL
    const mobileBtn = document.getElementById('mobile-btn');
    if (mobileBtn && sidebar) {
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('open');
        });

        document.querySelector('.main-content').addEventListener('click', () => {
            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        });
    }
});

// 4. BASE DE DATOS DE CRÓNICAS (CON VÍDEO INCLUIDO)
const baseCronicas = {
    'derbi-pesquera': {
        titulo: "Épica Victoria en el Derbi: El Rayo reina en los penaltis",
        fecha: "10 de Agosto, 2025",
        texto: `
            <p>Hay partidos que se ganan con fútbol y otros que se ganan con el escudo. Tras el descanso, el árbitro señaló un penalti a favor de La Pesquera. Pero el Rayo reaccionó y empatamos.</p>
            
            <div style="margin:20px 0; text-align:center; background:#000; padding:10px; border-radius:10px;">
                <video controls style="width:100%; max-height:400px; border-radius:5px;">
                    <source src="video-partido.mp4" type="video/mp4">
                    Tu navegador no soporta vídeos.
                </video>
                <p style="color:#fff; font-size:0.8rem; margin-top:5px;">Resumen de la tanda de penaltis</p>
            </div>

            <p>En los minutos finales ellos se pusieron 1-2. Con el tiempo cumplido, sacamos la casta, forzamos un penalti, pusimos el 2-2 y a los penaltis.</p>
            <h3 style="color:#7a1b2e; margin-top:15px;">3-0 en Penaltis: Humillación Final</h3>
            <p>En la tanda no hubo color. Un contundente 3-0. Los penaltis de La Pesquera todavía los están buscando por los pinos.</p>
        `
    }
};

// 5. FUNCIONES DE CRÓNICAS
function abrirCronica(id) {
    const partido = baseCronicas[id];
    const lista = document.getElementById('lista-cronicas');
    const detalle = document.getElementById('detalle-cronica');
    const contenido = document.getElementById('contenido-cronica');

    if (partido && lista && detalle && contenido) {
        contenido.innerHTML = `
            <h1 style="color:#7a1b2e; margin-bottom:10px; font-size:1.8rem;">${partido.titulo}</h1>
            <p style="color:#666; font-size:0.9rem;">${partido.fecha}</p>
            <hr style="margin:20px 0; opacity:0.2;">
            <div class="texto-cronica" style="line-height:1.6; color:#333;">${partido.texto}</div>
        `;
        
        lista.style.display = 'none';
        detalle.style.display = 'block';
        window.scrollTo(0, 0);
    }
}

function volverALista() {
    const lista = document.getElementById('lista-cronicas');
    const detalle = document.getElementById('detalle-cronica');
    if(lista && detalle) {
        lista.style.display = 'grid';
        detalle.style.display = 'none';
    }
}

// 6. FUNCIÓN PARA LA PORRA (EXTRA)
function enviarPorra() {
    const gRayo = document.querySelector('input[name="goles_rayo"]').value;
    const gRival = document.querySelector('input[name="goles_rival"]').value;
    
    if(gRayo === "" || gRival === "") {
        alert("Pon un resultado, ¡no seas de La Pesquera!");
    } else {
        alert(`Porra enviada: Rayo ${gRayo} - ${gRival} Rival. ¡El escozor está servido!`);
    }
}