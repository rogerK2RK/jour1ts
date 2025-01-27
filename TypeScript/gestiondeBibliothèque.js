var Disponibilite;
(function (Disponibilite) {
    Disponibilite["DISPONIBLE"] = "Disponible";
    Disponibilite["EMPRUNTE"] = "Emprunt\u00E9";
})(Disponibilite || (Disponibilite = {}));
var Livre = /** @class */ (function () {
    function Livre(titre, auteur, anneePublication, disponibilite) {
        if (disponibilite === void 0) { disponibilite = Disponibilite.DISPONIBLE; }
        this.titre = titre;
        this.auteur = auteur;
        this.anneePublication = anneePublication;
        this.disponibilite = disponibilite;
        this.id = ++Livre.dernierId;
    }
    Livre.dernierId = 0;
    return Livre;
}());
var Utilisateur = /** @class */ (function () {
    function Utilisateur(nom, email) {
        this.nom = nom;
        this.email = email;
        this.livresEmpruntes = [];
    }
    Utilisateur.prototype.emprunterLivre = function (livre) {
        if (livre.disponibilite === Disponibilite.DISPONIBLE) {
            livre.disponibilite = Disponibilite.EMPRUNTE;
            this.livresEmpruntes.push(livre);
            console.log("".concat(this.nom, " a emprunt\u00E9 \"").concat(livre.titre, "\"."));
        }
        else {
            console.log("Le livre \"".concat(livre.titre, "\" n'est pas disponible."));
        }
    };
    Utilisateur.prototype.retournerLivre = function (livre) {
        var index = this.livresEmpruntes.findIndex(function (l) { return l.id === livre.id; });
        if (index !== -1) {
            livre.disponibilite = Disponibilite.DISPONIBLE;
            this.livresEmpruntes.splice(index, 1);
            console.log("".concat(this.nom, " a retourn\u00E9 \"").concat(livre.titre, "\"."));
        }
        else {
            console.log("".concat(this.nom, " n'a pas emprunt\u00E9 ce livre."));
        }
    };
    Utilisateur.prototype.listerLivresEmpruntes = function () {
        if (this.livresEmpruntes.length === 0) {
            console.log("".concat(this.nom, " n'a emprunt\u00E9 aucun livre."));
        }
        else {
            console.log("Livres emprunt\u00E9s par ".concat(this.nom, " :"));
            this.livresEmpruntes.forEach(function (livre) {
                return console.log("- ".concat(livre.titre, " (").concat(livre.auteur, ", ").concat(livre.anneePublication, ")"));
            });
        }
    };
    return Utilisateur;
}());
var Bibliotheque = /** @class */ (function () {
    function Bibliotheque() {
        this.livres = [];
        this.utilisateurs = [];
    }
    Bibliotheque.prototype.ajouterLivre = function (livre) {
        this.livres.push(livre);
        console.log("Le livre \"".concat(livre.titre, "\" a \u00E9t\u00E9 ajout\u00E9."));
    };
    Bibliotheque.prototype.retirerLivre = function (id) {
        var index = this.livres.findIndex(function (livre) { return livre.id === id; });
        if (index !== -1) {
            var livreSupprime = this.livres.splice(index, 1)[0];
            console.log("Le livre \"".concat(livreSupprime.titre, "\" a \u00E9t\u00E9 retir\u00E9."));
        }
        else {
            console.log("Aucun livre avec l'ID ".concat(id, " n'a \u00E9t\u00E9 trouv\u00E9."));
        }
    };
    Bibliotheque.prototype.ajouterUtilisateur = function (utilisateur) {
        this.utilisateurs.push(utilisateur);
        console.log("L'utilisateur ".concat(utilisateur.nom, " a \u00E9t\u00E9 ajout\u00E9."));
    };
    Bibliotheque.prototype.emprunterLivre = function (idLivre, emailUtilisateur) {
        var livre = this.livres.find(function (l) { return l.id === idLivre; });
        var utilisateur = this.utilisateurs.find(function (u) { return u.email === emailUtilisateur; });
        if (livre && utilisateur) {
            utilisateur.emprunterLivre(livre);
        }
        else {
            console.log("Livre ou utilisateur introuvable.");
        }
    };
    Bibliotheque.prototype.retournerLivre = function (idLivre, emailUtilisateur) {
        var livre = this.livres.find(function (l) { return l.id === idLivre; });
        var utilisateur = this.utilisateurs.find(function (u) { return u.email === emailUtilisateur; });
        if (livre && utilisateur) {
            utilisateur.retournerLivre(livre);
        }
        else {
            console.log("Livre ou utilisateur introuvable.");
        }
    };
    Bibliotheque.prototype.listerLivres = function () {
        if (this.livres.length === 0) {
            console.log("Aucun livre dans la bibliothèque.");
        }
        else {
            console.log("Liste des livres :");
            this.livres.forEach(function (livre) {
                console.log("- [".concat(livre.disponibilite, "] ").concat(livre.titre, " (").concat(livre.auteur, ", ").concat(livre.anneePublication, ")"));
            });
        }
    };
    return Bibliotheque;
}());
// Exemple d'utilisation
var biblio = new Bibliotheque();
var livre1 = new Livre("Les Misérables", "Victor Hugo", 1862);
var livre2 = new Livre("1984", "George Orwell", 1949);
var livre3 = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry", 1943);
biblio.ajouterLivre(livre1);
biblio.ajouterLivre(livre2);
biblio.ajouterLivre(livre3);
var utilisateur1 = new Utilisateur("Alice Dupont", "alice@example.com");
var utilisateur2 = new Utilisateur("Bob Martin", "bob@example.com");
biblio.ajouterUtilisateur(utilisateur1);
biblio.ajouterUtilisateur(utilisateur2);
biblio.emprunterLivre(livre1.id, "alice@example.com");
biblio.emprunterLivre(livre2.id, "bob@example.com");
biblio.listerLivres();
biblio.retournerLivre(livre1.id, "alice@example.com");
biblio.listerLivres();
utilisateur1.listerLivresEmpruntes();
utilisateur2.listerLivresEmpruntes();
