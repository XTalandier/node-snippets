function Vehicule(){
    console.log('instance vehicule');
}

Vehicule.COULEURS = {
    blanche: '#fff',
    rouge: '#f00',
    verte: '#0f0',
    bleu: '#00f'
};

Vehicule.prototype.nom = '';
Vehicule.prototype.nbPortes = 0;
Vehicule.prototype.couleur = Vehicule.COULEURS.blanche;


Vehicule.prototype.showNom = function(){
    console.log(this.nom);
};

Vehicule.prototype.showPortes = function(){
    console.log('Il y a', this.nbPortes, 'portes');
};

Vehicule.prototype.showCouleur = function(){
    console.log('La couleur est: ', this.couleur);
};

module.exports = Vehicule;