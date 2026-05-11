document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar-menu a');
    const sections = document.querySelectorAll('.content-section');
    const sidebar = document.getElementById('sidebar');
    const mobileBtn = document.getElementById('mobile-btn');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Cerrar menú en móvil
            sidebar.classList.remove('open');

            // Cambiar clase activa en menú
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Cambiar sección visible
            sections.forEach(s => s.classList.remove('active'));
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if(targetSection) {
                targetSection.classList.add('active');
            }
            
            window.scrollTo(0,0);
        });
    });

    mobileBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});