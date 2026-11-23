// Données communes aux 3 propositions (tirées des visuels Facebook de NIR Export).
// À remplacer plus tard par l'espace admin (base de données).
(function () {
  const g = (id, n) => Array.from({ length: n }, (_, i) => `assets/gallery/${id}-${i + 2}.jpg`);
  const nf = (n) => n.toLocaleString('fr-FR').replace(/[  ]/g, ' ');
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
        engine: 'Hybride', gearbox: null, fuel: 'Hybride',
        year: 2025, km: 49000, color: 'Gris',
        price: 14960, status: 'stock',
        img: 'assets/img/captur-techno.jpg', flyer: 'assets/flyers/captur-techno.jpg',
        gallery: ['assets/img/captur-techno.jpg', ...g('captur', 2)],
        features: ['Motorisation hybride efficace', 'Grand espace à bord', 'Technologies de pointe', 'Sécurité renforcée'],
        intro: "Le nouveau Captur dans sa finition Techno : un SUV compact hybride, moderne et spacieux, avec seulement 49 000 km.",
      },
      {
        id: 'clio-alpine',
        brand: 'Renault', model: 'Clio 5', trim: 'Esprit Alpine',
        engine: null, gearbox: null, fuel: null,
        year: 2025, km: 43000, color: 'Gris Schiste',
        price: 13950, status: 'arrivage',
        img: 'assets/img/clio5-alpine.jpg', flyer: 'assets/flyers/clio5-alpine.jpg',
        gallery: ['assets/img/clio5-alpine.jpg', ...g('clio-alpine', 3)],
        features: ['Finition Esprit Alpine', 'Sièges sport avec logo Alpine', 'Écran tactile central', 'Jantes noires Alpine'],
        intro: "La Clio 5 dans sa finition sportive Esprit Alpine, en Gris Schiste. Sellerie Alpine, surpiqûres bleues et jantes noires.",
      },
      {
        id: 'arkana-blanc',
        brand: 'Renault', model: 'Arkana', trim: 'Techno Plus',
        engine: '1.3 TCe 140 ch', gearbox: 'Automatique', fuel: 'Essence',
        year: 2024, km: 80000, color: 'Blanc Perle',
        price: 15400, status: 'arrivage',
        img: 'assets/img/arkana-blanc.jpg', flyer: 'assets/flyers/arkana-blanc.jpg',
        gallery: ['assets/img/arkana-blanc.jpg', ...g('arkana-blanc', 3)],
        features: ['Climatisation automatique', 'Écran tactile', 'Radars de stationnement', 'Régulateur de vitesse', 'Aides à la conduite', 'Connectivité Bluetooth'],
        intro: "SUV coupé Arkana Techno Plus en Blanc Perle, boîte automatique et moteur 1.3 TCe 140 ch. Très bien équipé.",
      },
      {
        id: 'arkana-rouge',
        brand: 'Renault', model: 'Arkana', trim: 'Techno Plus',
        engine: '1.3 TCe 140 ch', gearbox: 'Automatique', fuel: 'Essence',
        year: null, km: 100000, color: 'Rouge',
        price: 13500, status: 'arrivage',
        img: 'assets/img/arkana-rouge.jpg', flyer: 'assets/flyers/arkana-rouge.jpg',
        gallery: ['assets/img/arkana-rouge.jpg', ...g('arkana-rouge', 3)],
        features: ['Boîte automatique', 'Moteur 1.3 TCe 140 ch', 'Grand écran tactile vertical', 'Finition Techno Plus'],
        intro: "Arkana Techno Plus rouge, boîte automatique, 1.3 TCe 140 ch. Le style d'un SUV coupé à un prix serré.",
      },
      {
        id: 'clio-noire',
        brand: 'Renault', model: 'Clio 5', trim: 'Techno',
        engine: '1.0 TCe 90 ch', gearbox: 'Manuelle', fuel: 'Essence',
        year: 2024, km: 72000, color: 'Noire',
        price: 11900, status: 'arrivage',
        img: 'assets/img/clio5-techno-noire.jpg', flyer: 'assets/flyers/clio5-techno-noire.jpg',
        gallery: ['assets/img/clio5-techno-noire.jpg', ...g('clio-noire', 3)],
        features: ['Véhicule contrôlé et garanti', 'Écran tactile', 'Compteur numérique', 'Frais de dossier export inclus'],
        intro: "Clio 5 Techno noire de 2024 avec le moteur 1.0 TCe 90 ch : économique, récente et facile à revendre.",
      },
    ],
    fmtPrice: (n) => nf(n) + ' €',
    fmtKm: (n) => nf(n) + ' km',
    // lien vers la fiche, en gardant le style de la proposition (1, 2 ou 3)
    link: (v, s) => `vehicule.html?id=${v.id}&s=${s}`,
    waText: (v) => `https://wa.me/33614933218?text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par le ${v.brand} ${v.model} ${v.trim} à ${nf(v.price)} € HT. Est-il toujours disponible ?`)}`,
  };
})();
