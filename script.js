function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Mostrar el índice correspondiente
    document.querySelectorAll('.index').forEach(index => index.classList.remove('active'));

    if (sectionId === 'main') {
        document.getElementById('main-index').classList.add('active');
    } else if (sectionId === 'implementacion') {
        document.getElementById('implementacion-index').classList.add('active');
    } else if (sectionId === 'manual_de_usuario') {
        document.getElementById('manual-de-usuario-index').classList.add('active');
    }

    // Mostrar subsecciones si se selecciona "Implementación" o "Manual de Usuario"
    if (sectionId === 'implementacion') {
        // Muestra las subsecciones dentro de la implementación
        const subsections = document.querySelectorAll('#implementacion > section');
        subsections.forEach(subsection => {
            subsection.style.display = 'block';
        });
    }

    if (sectionId === 'manual_de_usuario') {
        // Muestra las subsecciones dentro del manual de usuario
        const subsections = document.querySelectorAll('#manual_de_usuario > section');
        subsections.forEach(subsection => {
            subsection.style.display = 'block';
        });
    }

    // Si la sección es "main", también se deben mostrar sus subsecciones
    if (sectionId === 'main') {
        const subsections = document.querySelectorAll('#main > section');
        subsections.forEach(subsection => {
            subsection.style.display = 'block';
        });
    }
}

// Mostrar la sección "main" por defecto cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    showSection('main');
});