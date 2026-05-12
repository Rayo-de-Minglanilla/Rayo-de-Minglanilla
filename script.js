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
        texto: `
        <p>Hay partidos que se ganan con fútbol y otros que se ganan con el escudo. El derbi comenzó con una intensidad eléctrica, donde el Rayo de Minglanilla avisó pronto: <strong>Alen</strong> estrelló un balón en el <strong>larguero</strong> en los primeros minutos que hizo temblar la portería rival y despertó a la grada local.</p>
        
        <p>El dominio inicial se tradujo en el primer rugido de la tarde gracias a un golazo de <strong>Ismael</strong>, que adelantó al equipo demostrando su calidad. El control del juego fue absoluto gracias al despliegue de <strong>Jaime, Alen y Carlos</strong> en la sala de máquinas; los tres mediocentros dictaron el ritmo del partido con un juego fluido y una presión asfixiante.</p>

        

        <p>Por las bandas, <strong>Catarran</strong> fue un auténtico puñal, desbordando con internadas constantes que volvieron loca a la defensa de La Pesquera. Atrás, la solidez fue la clave: <strong>Vinagres y Jorge</strong> se mostraron imperiales, cortando cada avance rival con una contundencia que dio seguridad a todo el bloque.</p>

        <p>Sin embargo, el derbi es caprichoso. Tras el descanso, el árbitro señaló un penalti a favor de La Pesquera y en los minutos finales ellos consiguieron ponerse 1-2. Parecía que todo estaba perdido, pero las <strong>brillantes decisiones del Míster</strong> desde el banquillo mantuvieron la fe del equipo.</p>

        <p>Con el tiempo cumplido, sacamos la casta. Forzamos un penalti salvador y <strong>Iker</strong>, con nervios de acero, lo mandó al fondo de las mallas para poner el 2-2 definitivo y desatar la locura. Directos a los penaltis.</p>
        
        <h3 style="color:#7a1b2e; margin-top:20px; font-size:1.5rem; border-left: 5px solid #f1c40f; padding-left: 15px;">3-0 en Penaltis: Humillación Final</h3>
        <p>En la tanda no hubo color. Un contundente 3-0 que certificó la superioridad local. Los penaltis de La Pesquera todavía los están buscando por los pinos mientras Minglanilla celebra una victoria que pasará a la historia.</p>
        <div style="margin:25px 0; text-align:center; background:#000; padding:10px; border-radius:15px; box-shadow: 0 10px 20px rgba(0,0,0,0.3);">
            <video controls style="width:100%; max-height:450px; border-radius:8px;">
                <source src="video-partido.mp4" type="video/mp4">
                Tu navegador no soporta vídeos.
            </video>
            <p style="color:#fff; font-size:0.85rem; margin-top:8px; font-style:italic;">Resumen de la épica tanda de penaltis</p>
        </div>
        
        `
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