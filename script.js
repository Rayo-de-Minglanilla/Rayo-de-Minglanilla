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

    // 2. NAVEGACIÓN DEL MENÚ (Corregida para nuevas secciones)
    const links = document.querySelectorAll('.sidebar-menu a');
    const sections = document.querySelectorAll('.content-section');
    const sidebar = document.getElementById('sidebar');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Ocultar todas las secciones
                    sections.forEach(s => {
                        s.classList.remove('active');
                        s.style.display = 'none';
                    });

                    // Mostrar la sección destino
                    targetSection.classList.add('active');
                    targetSection.style.display = 'block';

                    // Actualizar estado del menú
                    links.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');

                    // Cerrar sidebar en móviles
                    if (sidebar) sidebar.classList.remove('open');
                    
                    // Si vas a resúmenes, asegúrate de ver la lista, no una crónica abierta
                    if (targetId === 'resumenes') volverALista();
                    
                    window.scrollTo(0, 0);
                }
            }
        });
    });
});

// 3. BASE DE DATOS DE CRÓNICAS
const baseCronicas = {
    'derbi-pesquera': {
        titulo: "Épica Victoria en el Derbi: El Rayo reina en los penaltis",
        fecha: "10 de Agosto, 2025",
        texto: `
            <p>Hay partidos que se ganan con fútbol y otros que se ganan con el escudo. Tras el descanso, el árbitro señaló un penalti a favor de La Pesquera. Pero el Rayo reaccionó y empatamos.</p>
            <p>En los minutos finales ellos se pusieron 1-2. Con el tiempo cumplido, sacamos la casta, forzamos un penalti, pusimos el 2-2 y a los penaltis.</p>
            <h3 style="color:#7a1b2e;">3-0 en Penaltis: Humillación Final</h3>
            <p>En la tanda no hubo color. Un contundente 3-0. Los penaltis de La Pesquera todavía los están buscando por los pinos.</p>
        `
    }
};

// 4. FUNCIONES DE CRÓNICAS (Abrir/Cerrar)
function abrirCronica(id) {
    const partido = baseCronicas[id];
    const lista = document.getElementById('lista-cronicas');
    const detalle = document.getElementById('detalle-cronica');
    const contenido = document.getElementById('contenido-cronica');

    if (partido && lista && detalle && contenido) {
        contenido.innerHTML = `
            <h1 style="color:#7a1b2e;">${partido.titulo}</h1>
            <p><small>${partido.fecha}</small></p>
            <hr style="margin:15px 0;">
            <div>${partido.texto}</div>
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