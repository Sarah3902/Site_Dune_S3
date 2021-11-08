
// CARROUSEL PERSONNAGES

// Variable globale
let index = 0;
let index1 = 0;

// CARTE (SLIDE 5)

// Création de la carte, vide à ce stade
const carte = L.map('carte', {
  center: [47.2608333, 2.4188888888888886], // Centre de la France
  zoom: 5,
  minZoom: 4,
  maxZoom: 19,
});

// Ajout des tuiles (ici OpenStreetMap)
// https://wiki.openstreetmap.org/wiki/Tiles#Servers
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(carte);

// Ajout de l'échelle
L.control.scale().addTo(carte);

// Appelée si récupération des coordonnées réussie

  // Injection du résultat dans du texte
function positionSucces(position) {
  const lat = Math.round(1000 * position.coords.latitude) / 1000;
   const long = Math.round(1000 * position.coords.longitude) / 1000;
  $(".localisation").text(`Latitude: ${lat}°, Longitude: ${long}°`);
  carte.flyTo([lat, long], 12);
};

// Appelée si échec de récuparation des coordonnées
function positionErreur(erreurPosition) {
  // Cas d'usage du switch !
  let natureErreur;
  switch (erreurPosition.code) {
    case erreurPosition.TIMEOUT:
      // Attention, durée par défaut de récupération des coordonnées infini
      natureErreur = "La géolocalisation prends trop de temps...";
      break;
    case erreurPosition.PERMISSION_DENIED:
      natureErreur = "Vous n'avez pas autorisé la géolocalisation.";
      break;
    case erreurPosition.POSITION_UNAVAILABLE:
      natureErreur = "Votre position n'a pu être déterminée.";
      break;
    default:
      natureErreur = "Une erreur inattendue s'est produite.";
  }
  // Injection du texte
  $(".localisation").text(natureErreur);
};

// Récupération des coordonnées au clic sur le bouton
$(".btnLoc").click(function() {
  // Support de la géolocalisation
  if ("geolocation" in navigator) {
    // Support = exécution du callback selon le résultat
    navigator.geolocation.getCurrentPosition(positionSucces, positionErreur, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 30000,
    });
  } else {
    // Non support = injection de texte
    $(".localisation").text("La géolocalisation n'est pas supportée par votre navigateur");
  }
});



// CARROUSEL

// Gestion des événements
$('.control>span').click(function() {
  // Récupération index
  const indexN = $('.control>span').index(this);
  const indexP = $('.control>span').index(this);

  // Renouveller l'image
  $('.car_img').eq(index).fadeOut(1000).end().eq(indexN).fadeIn(1000);
  // Renouveller le texte
  $('.infos_persos>p').eq(index1).fadeOut(1000).end().eq(indexP).fadeIn(1000);

  // Mettre à jour l'index
  index = indexN;
  index1 = indexP;
});

$('.avant').click(function() {

  // Renouveller l'image
  $('.car_img').eq(index).fadeOut(1000).end().eq(index - 1).fadeIn(1000);
  // Renouveller le texte
  $('.infos_persos>p').eq(index1).fadeOut(1000).end().eq(index1 - 1).fadeIn(1000);

  // Mettre à jour l'index
  index = index-1;
  index1 = index1-1;

  if (index<0 || index1<0) {
    index = 10;
    index1 = 10;
  };
});

$('.apres').click(function() {

  // Renouveller l'image
  $('.car_img').eq(index).fadeOut(1000).end().eq(index + 1).fadeIn(1000);
  // Renouveller le texte
  $('.infos_persos>p').eq(index1).fadeOut(1000).end().eq(index1 + 1).fadeIn(1000);

  // Mettre à jour l'index
  index = index+1;
  index1 = index1+1;

  if (index>10 || index1>10) {
    index = 0;
    index1 = 0;
  };
});



// CARROUSEL IMG FILM

let index2 = 0;
let index3 = 0;

$('.avant2').click(function() {

  // Renouveller l'image
  $('.img_film').eq(index2).fadeOut(1000).end().eq(index2 - 1).fadeIn(1000);
  // Renouveller le texte
  $('.infos_persos>p').eq(index3).fadeOut(1000).end().eq(index3 - 1).fadeIn(1000);

  // Mettre à jour l'index
  index2 = index2-1;
  index3 = index3-1;

  if (index2<0 || index3<0) {
    index2 = 8;
    index3 = 8;
  };
});

$('.apres2').click(function() {

  // Renouveller l'image
  $('.img_film').eq(index2).fadeOut(1000).end().eq(index2 + 1).fadeIn(1000);
  // Renouveller le texte
  $('.infos_persos>p').eq(index3).fadeOut(1000).end().eq(index3 + 1).fadeIn(1000);

  // Mettre à jour l'index
  index2 = index2 +1;
  index3 = index3 +1;

  if (index2>8 || index3>8) {
    index2 = 0;
    index3 = 0;
  };
});


// let infosLoc = $(".localisation");
// let btnLoc = $(".btnLoc");

// if (infosLoc != empty) {
//   btnLoc.style.display='none';
// } else {
//   btnLoc.style.color='red';
// }


// POP UP
let btnPopup = document.getElementById('btnPopup');
let overlay = document.getElementById('overlay');
btnPopup.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
}

var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeModal);
function closeModal() {
  overlay.style.display='none';
  }