// Carrousel

// Variable globale
let index = 0;
let index1 = 0;

// Gestion des événements
$('span').click(function() {
  // Récupération index
  const indexN = $('span').index(this);
  const indexP = $('span').index(this);

  // Renouveller l'image
  $('.car_img').eq(index).fadeOut(1000).end().eq(indexN).fadeIn(1000);
  // Renouveller le texte
  $('.infos_persos>p').eq(index1).fadeOut(1000).end().eq(indexP).fadeIn(1000);

  // Mettre à jour l'index
  index = indexN;
  index1 = indexP;
});
