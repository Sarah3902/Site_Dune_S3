// Carrousel

// Variable globale
let index = 0;
let index1 = 0;
let index2 = 0;
let index3 = 0;

// Gestion des événements
$('span').click(function() {
  // Récupération index
  const indexN = $('span').index(this);
  const indexP = $('span').index(this);

// $('.fleches').click(function() {
//   // Récupération index
//   const indexN1 = $('.fleches').index(this);
//   const indexP1 = $('.fleches').index(this); 

  // Renouveller l'image
  $('.car_img').eq(index).fadeOut(1000).end().eq(indexN).fadeIn(1000);
  // Renouveller le texte
  $('.infos_persos>p').eq(index1).fadeOut(1000).end().eq(indexP).fadeIn(1000);

    // // Renouveller l'image
    // $('.car_img').eq(index2).fadeOut(1000).end().eq(indexN1).fadeIn(1000);
    // // Renouveller le texte
    // $('.infos_persos>p').eq(index3).fadeOut(1000).end().eq(indexP1).fadeIn(1000);

  // Mettre à jour l'index
  index = indexN;
  index1 = indexP;
//   index2 = indexN1;
//   index3 = indexP1;
});
