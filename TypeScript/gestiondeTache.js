// Liste des Tâches à faire
var EtatTache;
(function (EtatTache) {
    EtatTache["AFAIRE"] = "\u00C0 faire";
    EtatTache["ENCOURS"] = "En cours";
    EtatTache["TERMINE"] = "Termin\u00E9";
})(EtatTache || (EtatTache = {}));
// Init de la Class Tâche
var Tache = /** @class */ (function () {
    function Tache(titre, description, etat) {
        if (etat === void 0) { etat = EtatTache.AFAIRE; }
        this.titre = titre;
        this.description = description;
        this.etat = etat;
    }
    // Méthode de Changement d'état de la Tache
    Tache.prototype.changerEtat = function (nouvelEtat) {
        this.etat = nouvelEtat;
    };
    return Tache;
}());
// Définir la classe GestionnaireTaches
var GestionnaireTaches = /** @class */ (function () {
    function GestionnaireTaches() {
        this.taches = [];
    }
    // Add Tache
    GestionnaireTaches.prototype.ajouterTache = function (tache) {
        this.taches.push(tache);
        console.log("Tache ajout\u00E9e: ".concat(tache.titre));
    };
    // delet Tache by title
    GestionnaireTaches.prototype.supprimerTache = function (titre) {
        var index = this.taches.findIndex(function (tache) { return tache.titre === titre; });
        if (index !== -1) {
            var tacheSupprimee = this.taches.splice(index, 1)[0];
            console.log("T\u00E2che supprim\u00E9e : ".concat(tacheSupprimee.titre));
        }
        else {
            console.log("T\u00E2che non trouv\u00E9e : ".concat(titre));
        }
    };
    // Changer l'état d'une tâche par son titre
    GestionnaireTaches.prototype.changerEtatTache = function (titre, nouvelEtat) {
        var tache = this.taches.find(function (t) { return t.titre === titre; });
        if (tache) {
            tache.changerEtat(nouvelEtat);
            console.log("\u00C9tat modifi\u00E9 : ".concat(tache.titre, " est maintenant \"").concat(nouvelEtat, "\""));
        }
        else {
            console.log("T\u00E2che non trouv\u00E9e : ".concat(titre));
        }
    };
    // Afficher la liste des tâches
    GestionnaireTaches.prototype.afficherTaches = function () {
        console.log("Liste des tâches :");
        this.taches.forEach(function (tache, index) {
            console.log("".concat(index + 1, ". [").concat(tache.etat, "] ").concat(tache.titre, " - ").concat(tache.description));
        });
    };
    return GestionnaireTaches;
}());
// Exemple d'utilisation
var todolist = new GestionnaireTaches();
var task1 = new Tache("Faire les courses", "Acheter du pain et du lait");
var task2 = new Tache("Préparer à manger", "Prendre les ingrédient nécessaire", EtatTache.ENCOURS);
var task3 = new Tache("Faire du sport", "Aller à la salle de sport", EtatTache.TERMINE);
todolist.ajouterTache(task1);
todolist.ajouterTache(task2);
todolist.ajouterTache(task3);
todolist.afficherTaches();
todolist.changerEtatTache("Faire les courses", EtatTache.TERMINE);
todolist.afficherTaches();
todolist.supprimerTache("Préparer à manger");
todolist.afficherTaches();
