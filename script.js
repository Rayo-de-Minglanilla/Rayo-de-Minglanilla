// 1. Navegación y Menú Móvil
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar-menu a');
    const sections = document.querySelectorAll('.content-section');
    const sidebar = document.getElementById('sidebar');
    const mobileBtn = document.getElementById('mobile-btn');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href').substring(1);
            
            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(target).classList.add('active');
            
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        });
    });

    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }
});

// 2. Base de Datos de Crónicas
const baseCronicas = {
    'derbi-pesquera': {
        titulo: "Épica Victoria en el Derbi: El Rayo reina en los penaltis",
        fecha: "Derbi Comarcal - Temporada 2026",
        texto: `
            <p class="intro">Se respiraba aroma de las grandes citas en la <strong>Fuente del Recreo</strong>. Las gradas, abarrotadas por una afición volcada, presentaban un aspecto espectacular para recibir un derbi que prometía chispas desde el pitido inicial.</p>
            
            <div class="foto-cronica" style="text-align:center; margin:20px 0;">
                <img src="foto-partido1.jpg" alt="11 Titular" style="max-width:100%; border-radius:10px;">
                <p style="font-style:italic; font-size:0.9rem;">Los 11 guerreros del Rayo de Minglanilla que defendieron el escudo.</p>
            </div>

            <p>El encuentro arrancó con el respeto típico de estos duelos, pero pronto el Rayo empezó a imponer su ley. Mientras el conjunto visitante se limitaba a defenderse como podía, los locales generaban peligro constante. La justicia llegó con el primer gol del Rayo, que desató la locura. Sin embargo, La Pesquera logró darle la vuelta al marcador de forma inesperada.</p>

            <p>Pero al Rayo nunca se le puede dar por muerto. Con el corazón en la mano y empujados por su gente, los nuestros se volcaron al ataque. El premio llegó en los minutos finales: un penalti clarísimo que servía para igualar la contienda. Pese a que el Rayo buscó la victoria hasta el último segundo ante una Pesquera encerrada, el marcador no se movió más, llevándonos a los penaltis.</p>

            <h3 style="color:#7a1b2e; margin-top:20px;">La Gloria desde los once metros</h3>
            <p>Los nervios eran de acero. En la tanda de penaltis, el Rayo demostró su superioridad técnica y mental con un <strong>contundente 3-0</strong>. Mención aparte merece el arbitraje, que decidió ignorar un gol de penalti legal que entró claramente, pero ni eso pudo frenar la victoria local.</p>
            
            <div class="video-container" style="margin:20px 0; text-align:center;">
                <video controls width="100%" style="border-radius:10px; border: 2px solid #7a1b2e;">
                    <source src="foto-partido2.jpg.mp4" type="video/mp4">
                    Tu navegador no soporta videos.
                </video>
                <p style="font-weight:bold; margin-top:10px;">"Seguimos buscando el balón" - El Rayo manda.</p>
            </div>

            <p style="font-weight:bold; border-left:4px solid #f1c40f; padding-left:15px;">Victoria sufrida pero merecida ante un rival inferior. ¡El derbi se queda en casa!</p>
        `,
        imagen: "foto-partido1.jpg" // He cambiado esto para que use una foto que ya tienes
    }
};

// 3. Funciones Globales (FUERA de cualquier llaves)
function abrirCronica(id) {
    const partido = baseCronicas[id];
    if (!partido) return;

    const listaCronicas = document.getElementById('lista-cronicas');
    const detalleCronica = document.getElementById('detalle-cronica');
    const contenido = document.getElementById('contenido-cronica');
    
    contenido.innerHTML = `
        <img src="${partido.imagen}" style="width:100%; height:auto; max-height:400px; object-fit:cover; border-radius:15px; margin-bottom:20px;">
        <h1 style="color:#7a1b2e;">${partido.titulo}</h1>
        <p><small>${partido.fecha}</small></p>
        <hr style="margin:20px 0;">
        <div class="texto-completo">${partido.texto}</div>
    `;

    listaCronicas.style.display = 'none';
    detalleCronica.style.display = 'block';
    window.scrollTo(0, 0);
}

function volverALista() {
    document.getElementById('lista-cronicas').style.display = 'grid';
    document.getElementById('detalle-cronica').style.display = 'none';
}