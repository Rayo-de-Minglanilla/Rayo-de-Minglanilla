document.addEventListener('DOMContentLoaded', () => {
    // 1. CONTADOR DE PATERNIDAD
    const fechaPaternidad = new Date(2025, 7, 10, 19, 0, 0); 
    function actualizarContador() {
        const ahora = new Date();
        const diferencia = ahora - fechaPaternidad;
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const elemento = document.getElementById('contador-dias');
        if(elemento) elemento.innerText = dias;
    }
    actualizarContador();

    // 2. NAVEGACIÓN DEL MENÚ
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
                    sections.forEach(s => s.classList.remove('active'));
                    targetSection.classList.add('active');
                    links.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                    if (sidebar) sidebar.classList.remove('open');
                    if (targetId === 'resumenes') volverALista();
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
        imagen: "foto-partido1.jpg",
        texto: `
            <p style="margin-bottom:15px;">Hay partidos que se ganan con fútbol y otros que se ganan con el escudo. El derbi en la <strong>Fuente del Recreo</strong> fue de los segundos. Ante una afición entregada, el Rayo demostró por qué en Minglanilla no se rinde nadie.</p>
            
            <div style="text-align:center; margin:20px 0;">
                <img src="foto-partido1.jpg" style="max-width:100%; border-radius:10px; border: 2px solid #7a1b2e;">
                <p style="font-style:italic; font-size:0.8rem; color:#666;">Los 11 guerreros que defendieron el orgullo local.</p>
            </div>

            <p>El encuentro fue una montaña rusa. Tras el descanso, el árbitro señaló un penalti a favor de La Pesquera con el que lograron adelantarse. Pero el Rayo no tardó en reaccionar y, tras un asedio constante, logramos el empate.</p>

            <p>La tensión subió cuando, en los minutos finales, ellos se pusieron 1-2. Pero con el tiempo cumplido y el rival ya celebrando, sacamos la casta. Forzamos un penalti clarísimo, pusimos el 2-2 y mandamos el partido a los penaltis.</p>

            <h3 style="color:#7a1b2e; margin-top:20px;">3-0 en Penaltis: Humillación Final</h3>
            <p>En la tanda no hubo color. Un <strong>contundente 3-0</strong> que deja claro quién manda. Ni el arbitraje anulando un gol legal pudo frenar la justicia divina. Los penaltis de La Pesquera todavía los están buscando por los pinos.</p>
            
            <div style="margin:20px 0; text-align:center; background:#000; padding:15px; border-radius:10px;">
                <video controls width="100%">
                    <source src="video-partido.mp4" type="video/mp4">
                </video>
                <p style="color:#fff; font-size:0.8rem; margin-top:10px;">"Seguimos buscando el balón"</p>
            </div>

            <p style="font-weight:bold; border-left:4px solid #f1c40f; padding-left:15px;">En la Fuente del Recreo manda el Rayo. ¡Que tomen nota!</p>
        `
    }
};

// 4. FUNCIONES PARA ABRIR/CERRAR
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
    document.getElementById('lista-cronicas').style.display = 'grid';
    document.getElementById('detalle-cronica').style.display = 'none';
}
function switchTab(event, tabId) {
    // Ocultar contenidos
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(c => c.style.display = 'none');
    
    // Resetear botones
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(b => {
        b.style.background = '#ddd';
        b.style.color = '#333';
    });

    // Mostrar el seleccionado
    const activeTab = document.getElementById(tabId);
    activeTab.style.display = 'block';

    // Estilo del botón activo según la pestaña
    if (tabId === 'tab-diccionario') {
        event.currentTarget.style.background = '#7a1b2e';
        event.currentTarget.style.color = 'white';
    } else {
        event.currentTarget.style.background = '#f1c40f';
        event.currentTarget.style.color = 'black';
    }
}