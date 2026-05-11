document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar-menu a');
    const sections = document.querySelectorAll('.content-section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Quitar 'active' de todos los links
            links.forEach(l => l.classList.remove('active'));
            // Añadir 'active' al pulsado
            link.classList.add('active');

            // Quitar 'active' de todas las secciones
            sections.forEach(s => s.classList.remove('active'));
            // Mostrar la sección correspondiente
            const target = link.getAttribute('href').substring(1);
            document.getElementById(target).classList.add('active');
        });
    });
});