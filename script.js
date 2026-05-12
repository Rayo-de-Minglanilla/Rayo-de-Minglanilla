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
    // 4. BASE DE DATOS DE CRÓNICAS (CON TODA LA ÉPICA)
// 4. BASE DE DATOS DE CRÓNICAS (ACTUALIZADA CON EL ORDEN REAL)
const baseCronicas = {
    'derbi-pesquera': {
        titulo: "Épica Victoria en el Derbi: El Rayo reina en los penaltis",
        fecha: "10 de Agosto, 2025",
        texto: `
            <p>Un gran Rayo de Minglanilla se impone ante la Pesquera en un derbi emocionante</p>
            div style="margin-bottom:25px; text-align:center;">
                <img src="foto-partido.jpg.jpeg" alt="11 Titular Rayo de Minglanilla" style="width:100%; border-radius:15px; box-shadow: 0 8px 15px rgba(0,0,0,0.3); border: 3px solid #7a1b2e;">
                <p style="font-size:0.8rem; color:#666; margin-top:10px; font-weight:bold;">El 11 que hizo historia en el derbi</p>
            </div>
            <p>Hay partidos que se ganan con fútbol y otros que se ganan con el escudo. El derbi comenzó con máxima tensión y un jarro de agua fría: <strong>ellos empezaron ganando</strong> tras un penalti tempranero que puso cuesta arriba el encuentro. Pese al golpe, el Rayo avisó con un zapatazo de <strong>Alen</strong> al <strong>larguero</strong> que hizo temblar la portería rival.</p>
            
            <p>Tras el paso por vestuarios, la charla del Míster surtió efecto. En la reanudación, <strong>Ismael puso el empate</strong> con un golazo que devolvía la esperanza a Minglanilla. El dominio en la sala de máquinas fue clave gracias al despliegue de <strong>Jaime, Alen y Carlos</strong>, que controlaron el ritmo frente a un rival que se defendía con todo.</p>

            

            <p>Por las bandas, <strong>Catarran</strong> fue un puñal constante, mientras que en defensa el equipo mostró una solidez de hierro. <strong>Vinagres y Jorge</strong> estuvieron impecables en los cortes, liderados por un <strong>Rulas</strong> que ejerció de auténtico <strong>líder y capitán general</strong> en la zaga, ordenando al equipo en los momentos más críticos.</p>

            <p>El drama llegó en el tramo final. La Pesquera logró anotar el 1-2 que parecía definitivo, pero las <strong>decisiones del Míster</strong> mantuvieron al equipo volcado al ataque. Ya en el descuento, la fe tuvo premio: penalti a favor que <strong>Iker</strong> ejecutó con una sangre fría envidiable para poner el 2-2 y llevar el delirio a la grada.</p>
            
            <h3 style="color:#7a1b2e; margin-top:20px; font-size:1.5rem; border-left: 5px solid #f1c40f; padding-left: 15px;">3-0 en Penaltis: Humillación Final</h3>
            <p>En la tanda de penaltis, no hubo discusión. Un contundente 3-0 certificó que el derbi se quedaba en casa. Los lanzamientos de La Pesquera todavía los están buscando por los pinos mientras el Rayo celebra una gesta inolvidable.</p>
            <div style="margin:25px 0; text-align:center; background:#000; padding:10px; border-radius:15px; box-shadow: 0 10px 20px rgba(0,0,0,0.3);">
                <video controls style="width:100%; max-height:450px; border-radius:8px;">
                    <source src="video-partido.mp4" type="video/mp4">
                    Tu navegador no soporta vídeos.
                </video>
                <p style="color:#fff; font-size:0.85rem; margin-top:8px; font-style:italic;">Resumen de la épica tanda de penaltis</p>
            </div>
            <p>El ambiente en el campo fue una locura, con la afición volcada desde el primer minuto. Este triunfo no solo es un golpe de autoridad, sino una declaración de intenciones para la temporada. El Rayo ha demostrado que tiene carácter, calidad y un escudo que se defiende con uñas y dientes. ¡A seguir soñando, rayistas!</p>
            
            <p style="color:#7a1b2e; font-weight:bold; margin-top:20px;">SE BUSCA RIVAL</p>
            `
    }
};

// --- MOTOR DE LA WEB (Ponlo arriba del todo) ---
// 1. Los datos (Asegúrate de que las IDs coincidan con las de arriba)
// OBJETO DE DATOS


// FUNCIÓN DE CARGA
const noticiasDatos = {
    "jorge-perez": {
        titulo: "🚨 EXCLUSIVA: Jorge y Pérez",
        texto: "<img src='jorge.jpeg' style='width:100%; border-radius:10px;'><p>Pillados con vestidazos de seda. El club dice: 'Si quieren defender con tacones, les pondremos césped de seda'.</p>"
    },
    "carlos-cocoa": {
        titulo: "🍷 Carlos: El Rey de la Cocoa",
        texto: "<img src='carlos.jpeg' style='width:100%; border-radius:10px;'><p>Carlos se subió al podio de la Cocoa gritando AUPA RAYO y que el campo de La Pesquera es un patatal. ¡Toda la disco le seguía!</p>"
    }
};

function abrirNoticia(id) {
    const data = noticiasDatos[id];
    if (data) {
        // 1. Rellenamos el contenido
        document.getElementById('titulo-cronica').innerHTML = data.titulo;
        document.getElementById('cuerpo-cronica').innerHTML = data.texto;

        // 2. FORZAMOS LA NAVEGACIÓN
        // Buscamos si existe un enlace a resumenes en tu menú y lo "simulamos"
        // o simplemente cambiamos el hash manualmente:
        window.location.hash = ""; // Limpiamos
        setTimeout(() => {
            window.location.hash = "detalle-cronica";
        }, 10);
    }
}

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
