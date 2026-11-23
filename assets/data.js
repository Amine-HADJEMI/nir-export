// Données communes aux 3 propositions (tirées des visuels Facebook de NIR Export).
// À remplacer plus tard par un vrai back-office / fichier JSON.
window.NIR = {
  phone: '+33 6 14 93 32 18',
  phoneHref: 'tel:+33614933218',
  whatsapp: 'https://wa.me/33614933218',
  email: 'sasnirauto@gmail.com',
  facebook: 'https://www.facebook.com/people/NIR-Export/61576775191036/',
  vehicles: [
    {
      id: 'captur',
      brand: 'Renault', model: 'Captur', trim: 'Techno',
      engine: 'Hybride', gearbox: null,
      year: 2025, km: 49000, color: 'Gris',
      price: 14960, status: 'stock', img: 'assets/img/captur-techno.jpg', flyer: 'assets/flyers/captur-techno.jpg',
    },
    {
      id: 'clio-alpine',
      brand: 'Renault', model: 'Clio 5', trim: 'Esprit Alpine',
      engine: null, gearbox: null,
      year: 2025, km: 43000, color: 'Gris Schiste',
      price: 13950, status: 'arrivage', img: 'assets/img/clio5-alpine.jpg', flyer: 'assets/flyers/clio5-alpine.jpg',
    },
    {
      id: 'arkana-blanc',
      brand: 'Renault', model: 'Arkana', trim: 'Techno Plus',
      engine: '1.3 TCe 140 ch', gearbox: 'Automatique',
      year: 2024, km: 80000, color: 'Blanc Perle',
      price: 15400, status: 'arrivage', img: 'assets/img/arkana-blanc.jpg', flyer: 'assets/flyers/arkana-blanc.jpg',
    },
    {
      id: 'arkana-rouge',
      brand: 'Renault', model: 'Arkana', trim: 'Techno Plus',
      engine: '1.3 TCe 140 ch', gearbox: 'Automatique',
      year: null, km: 100000, color: 'Rouge',
      price: 13500, status: 'arrivage', img: 'assets/img/arkana-rouge.jpg', flyer: 'assets/flyers/arkana-rouge.jpg',
    },
    {
      id: 'clio-noire',
      brand: 'Renault', model: 'Clio 5', trim: 'Techno',
      engine: '1.0 TCe 90 ch', gearbox: null,
      year: 2024, km: 72000, color: 'Noire',
      price: 11900, status: 'arrivage', img: 'assets/img/clio5-techno-noire.jpg', flyer: 'assets/flyers/clio5-techno-noire.jpg',
    },
  ],
  fmtPrice: (n) => n.toLocaleString('fr-FR').replace(/ | /g, ' ') + ' €',
  fmtKm: (n) => n.toLocaleString('fr-FR').replace(/ | /g, ' ') + ' km',
};
