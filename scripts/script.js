
// CARROUSEL PERSONNAGES

// Variable globale
let index = 0;
let index1 = 0;


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
});

$('.apres').click(function() {

  // Renouveller l'image
  $('.car_img').eq(index).fadeOut(1000).end().eq(index + 1).fadeIn(1000);
  // Renouveller le texte
  $('.infos_persos>p').eq(index1).fadeOut(1000).end().eq(index1 + 1).fadeIn(1000);

  // Mettre à jour l'index
  index = index+1;
  index1 = index1+1;
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
});

$('.apres2').click(function() {

  // Renouveller l'image
  $('.img_film').eq(index2).fadeOut(1000).end().eq(index2 + 1).fadeIn(1000);
  // Renouveller le texte
  $('.infos_persos>p').eq(index3).fadeOut(1000).end().eq(index3 + 1).fadeIn(1000);

  // Mettre à jour l'index
  index2 = index2 +1;
  index3 = index3 +1;
});



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