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
const baseNoticias = {
    'exclusiva-jorge-perez': {
        titulo: "🚨 EXCLUSIVA: ¿Nuevos fichajes en el Rayo Femenino?",
        subtitulo: "Pillados Jorge y Pérez con un outfit 'rompedor'",
        texto: `
            <div style="text-align:center; margin-bottom:20px;">
                <img src="jorge.jpeg" alt="Exclusiva Jorge y Pérez" style="width:100%; border-radius:15px; border: 4px solid #ff00ff; box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);">
                <p style="font-style:italic; font-size:0.8rem; color:#666;">Imagen captada por un vecino que 'pasaba por allí'</p>
            </div>

            <p>Bombazo informativo en las calles de Minglanilla. Nuestros baluartes <strong>Jorge y Pérez</strong> han sido interceptados esta madrugada luciendo un estilismo que ni en la pasarela Cibeles: <strong>vestidazo de seda, tacón de aguja y un eyeliner que ya quisiera Kim Kardashian.</strong></p>

            <p>Los rumores han volado más rápido que Catarran por la banda. Mientras unos medios locales apuntan a que es un <strong>firme apoyo al colectivo travesti</strong>, otros testigos afirman que a la pareja de defensas simplemente "les gusta sentirse divinas" y que el roce del encaje les da más aerodinámica para los cortes de balón.</p>

            <div style="background:#f9f9f9; padding:15px; border-radius:10px; border-left:5px solid #ff00ff; margin:20px 0;">
                <p><strong>Declaraciones del Club:</strong> "Desde el Rayo de Minglanilla apoyamos la libertad de expresión de nuestros jugadores. Si Jorge quiere defender en minifalda, nosotros le compramos las medias. Eso sí, Pérez tiene prohibido usar tacones de más de 12cm en el campo por riesgo de esguince".</p>
            </div>

            <p>Se rumorea que el vestuario ya les ha bautizado como <em>'Las Supernenas de la Zaga'</em> y que han pedido que el próximo chándal oficial sea de lentejuelas. ¡La purpurina ha llegado al Fortín para quedarse!</p>
        `
    },
    'carlos-noche-loca': {
        titulo: "🍷 EXCLUSIVA: Una noche de copas, una noche loca para Carlos",
        subtitulo: "El mediocentro se convierte en el 'Capo de la Noche'",
        texto: `
            <div style="text-align:center; margin-bottom:20px;">
                <img src="carlos.jpeg" alt="Carlos en la Cocoa" style="width:100%; border-radius:15px; border: 4px solid #7a1b2e; box-shadow: 0 10px 20px rgba(0,0,0,0.3);">
                <p style="font-style:italic; font-size:0.8rem; color:#666; margin-top:10px;">Carlos minutos antes de intentar fichar al DJ para el Rayo</p>
            </div>

            <p>Lo que empezó como una "salida tranquila" terminó con la <strong>discoteca Cocoa</strong> a los pies de nuestro mediocentro. Testigos presenciales afirman que <strong>Carlos</strong>, poseído por el espíritu de la victoria, se subió al podio principal para dirigir a las masas.</p>

            <p>Con la mirada perdida pero el sentimiento a flor de piel, Carlos empezó a gritar <strong>"¡AUPA RAYO!"</strong> con tal potencia que el DJ tuvo que parar la música. Lo más increíble es que <strong>toda la discoteca empezó a seguirle el juego</strong>, convirtiendo la pista de baile en una grada de ultra-sur.</p>

            <div style="background:#fde9e9; padding:15px; border-radius:10px; border-left:5px solid #d9534f; margin:20px 0;">
                <p><strong>El Momento Estelar:</strong> Entre cántico y cántico, Carlos lanzó varias "pullitas" épicas contra La Pesquera. Se dice que gritó: <em>"¡En La Pesquera no hay césped porque se lo comen las vacas!"</em>, lo que provocó el delirio colectivo.</p>
            </div>

            <p>La noche terminó con Carlos intentando convencer al portero de la Cocoa de que el Rayo necesitaba "seguridad en el área pequeña" y prometiéndole un contrato pagado en raciones de torreznos.</p>

            <p style="font-weight:bold; color:#7a1b2e;">El Míster ha declarado: "Mientras no pierda el equilibrio en el campo, me vale. Pero que traiga una botella para el cuerpo técnico".</p>
        `
    
    }
    }


// Función para abrir la noticia (puedes reutilizar la de las crónicas si quieres)
function abrirNoticia(id) {
    const noticia = baseNoticias[id];
    if (noticia) {
        document.getElementById('cuerpo-cronica').innerHTML = noticia.texto;
        document.getElementById('titulo-cronica').innerText = noticia.titulo;
        showSection('detalle-cronica'); // Usamos el mismo contenedor de detalle que las crónicas
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
