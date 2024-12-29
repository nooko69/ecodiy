document.addEventListener('DOMContentLoaded', function() {
    const tutoriels = [
        { titre: 'Fabriquer des Bougies Naturelles', description: 'Utilisez de la cire d\'abeille et des huiles essentielles pour créer des bougies écologiques.', image: 'https://via.placeholder.com/300?text=Bougies+Naturelles', lien: '#' },
        { titre: 'Créer un Jardin Vertical', description: 'Utilisez des palettes en bois recyclé pour créer un magnifique jardin vertical.', image: 'https://via.placeholder.com/300?text=Jardin+Vertical', lien: '#' },
        { titre: 'Produits de Beauté Maison', description: 'Fabriquez des savons naturels, des baumes à lèvres et plus encore.', image: 'https://via.placeholder.com/300?text=Beaut%C3%A9+Maison', lien: '#' },
        { titre: 'Meubles en Bois Recyclé', description: 'Construisez des étagères ou des tables à partir de bois récupéré.', image: 'https://via.placeholder.com/300?text=Meubles+Recycl%C3%A9s', lien: '#' },
        { titre: 'Décorations Écologiques', description: 'Créez des décorations de fête à partir de matériaux naturels.', image: 'https://via.placeholder.com/300?text=D%C3%A9corations+%C3%89cologiques', lien: '#' }
    ];

    const tutorielsSection = document.getElementById('tutoriel-liste');

    tutoriels.forEach(tutoriel => {
        const tutorielDiv = document.createElement('div');
        tutorielDiv.classList.add('tutoriel');
        tutorielDiv.innerHTML = `
            <img src="${tutoriel.image}" alt="${tutoriel.titre}">
            <h3>${tutoriel.titre}</h3>
            <p>${tutoriel.description}</p>
            <a href="${tutoriel.lien}" target="_blank">Voir le Tutoriel</a>
        `;
        tutorielsSection.appendChild(tutorielDiv);
    });
});
