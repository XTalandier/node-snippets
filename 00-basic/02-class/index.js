var Vehicule = require('./vehicule');


var Voiture = function(){
    this.nbPortes = 4;
};


/**
 * Héritage: Voiture <- Vehicule
 */
Voiture.prototype = new Vehicule();

/**
 * Ajout d'une méthode à la classe Voiture
 *
 * /!\ Doit être situé après  Voiture.prototype = new Vehicule();
 */
Voiture.prototype.mutmut = function(){
    console.log('mutmut !!');
};




volvo = new Voiture();

volvo.nom = 'Volvo';
volvo.couleur = Vehicule.COULEURS.bleu;

volvo.showNom();
volvo.showPortes();
volvo.mutmut();

volvo.showCouleur();

