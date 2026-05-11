document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar-menu a');
    const sections = document.querySelectorAll('.content-section');
    const sidebar = document.getElementById('sidebar');
    const mobileBtn = document.getElementById('mobile-btn');

    // Navegación entre secciones
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href').substring(1);
            
            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(target).classList.add('active');
            
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });

    // Botón menú móvil
    mobileBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});

// --- SISTEMA DE CRÓNICAS ---

const baseCronicas = {
    'derbi-pesquera': {
        titulo: "Épica Victoria en el Derbi: El Rayo reina en los penaltis",
        fecha: "Derbi Comarcal - Temporada 2026",
        texto: `
            <p class="intro">Se respiraba aroma de las grandes citas en la <strong>Fuente del Recreo</strong>. Las gradas, abarrotadas por una afición volcada, presentaban un aspecto espectacular para recibir un derbi que prometía chispas desde el pitido inicial.</p>
            
            <div class="foto-cronica">
                <img src="foto-partido1.jpg.jpeg" alt="11 Titular" class="img-cronica">
                <p class="pie-foto">Los 11 guerreros del Rayo de Minglanilla que defendieron el escudo.</p>
            </div>

            <p>El encuentro arrancó con el respeto típico de estos duelos, pero pronto el Rayo empezó a imponer su ley. Mientras el conjunto visitante (La Pesquera) se limitaba a defenderse como podía ante la superioridad local, los nuestros generaban peligro constante. La justicia llegó con el primer gol del Rayo, que desató la locura. Sin embargo, en un par de acciones aisladas y con mucha fortuna, el rival logró darle la vuelta al marcador de forma totalmente inesperada.</p>

            <p>Pero al Rayo nunca se le puede dar por muerto. Con el corazón en la mano y empujados por su gente, los nuestros se volcaron al ataque en un asedio total. El premio llegó en los minutos finales: un penalti clarísimo que servía para igualar la contienda. Pese a que el Rayo buscó la victoria hasta el último segundo ante un rival encerrado en su área, el marcador nos llevó a una tanda de penaltis de infarto.</p>

            <h3>La Gloria desde los once metros</h3>
            <p>Los nervios eran de acero. En la tanda de penaltis, el Rayo demostró su superioridad técnica y mental con un <strong>contundente 3-0</strong>. Mención aparte merece el arbitraje, que decidió ignorar un gol de penalti absolutamente legal que entró claramente en la portería, pero ni esa injusticia pudo frenar la victoria local.</p>
            
            <div class="video-container">
                <video controls width="100%" id="video-derbi">
                    <source src="video-partido.mp4" type="video/mp4">
                    Tu navegador no soporta videos.
                </video>
                <p class="pie-video">"Seguimos buscando el balón" - El momento clave donde se demostró quién manda.</p>
            </div>

            <p class="conclusion">Victoria sufrida pero merecida ante un rival que se vio superado por la casta, la clase y el fútbol del Rayo de Minglanilla. ¡El derbi se queda donde debe estar!</p>
        `,
        imagen: "foto-portada-derbi.jpg"
    }
};

function abrirCronica(id) {
    const partido = baseCronicas[id];
    const contenedor = document.getElementById('contenido-cronica');
    
    contenedor.innerHTML = `
        <img src="${partido.imagen}" style="width:100%; height:300px; object-fit:cover; border-radius:10px; margin-bottom:20px; border: 2px solid #f1c40f;">
        <h1 style="color:#7a1b2e; margin-bottom:10px;">${partido.titulo}</h1>
        <p style="color:#666; font-style:italic;">${partido.fecha}</p>
        <hr style="margin:20px 0; opacity:0.2;">
        <div class="texto-completo">${partido.texto}</div>
    `;

    document.getElementById('lista-cronicas').style.display = 'none';
    document.getElementById('detalle-cronica').style.display = 'block';
    window.scrollTo(0, 0); // Sube arriba para leer bien
}

function volverALista() {
    document.getElementById('lista-cronicas').style.display = 'grid';
    document.getElementById('detalle-cronica').style.display = 'none';
}