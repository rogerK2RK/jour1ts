enum Disponibilite {
    DISPONIBLE = "Disponible",
    EMPRUNTE = "Emprunté",
}

class Livre {
    private static dernierId = 0;
    public readonly id: number;

    constructor(
        public titre: string,
        public auteur: string,
        public anneePublication: number,
        public disponibilite: Disponibilite = Disponibilite.DISPONIBLE
    ) {
        this.id = ++Livre.dernierId;
    }
}

class Utilisateur {
    private livresEmpruntes: Livre[] = [];

    constructor(public nom: string, public email: string) {}

    emprunterLivre(livre: Livre): void {
        if (livre.disponibilite === Disponibilite.DISPONIBLE) {
            livre.disponibilite = Disponibilite.EMPRUNTE;
            this.livresEmpruntes.push(livre);
            console.log(`${this.nom} a emprunté "${livre.titre}".`);
        } else {
            console.log(`Le livre "${livre.titre}" n'est pas disponible.`);
        }
    }

    retournerLivre(livre: Livre): void {
        const index = this.livresEmpruntes.findIndex((l) => l.id === livre.id);
        if (index !== -1) {
            livre.disponibilite = Disponibilite.DISPONIBLE;
            this.livresEmpruntes.splice(index, 1);
            console.log(`${this.nom} a retourné "${livre.titre}".`);
        } else {
            console.log(`${this.nom} n'a pas emprunté ce livre.`);
        }
    }

    listerLivresEmpruntes(): void {
        if (this.livresEmpruntes.length === 0) {
            console.log(`${this.nom} n'a emprunté aucun livre.`);
        } else {
            console.log(`Livres empruntés par ${this.nom} :`);
            this.livresEmpruntes.forEach((livre) =>
                console.log(`- ${livre.titre} (${livre.auteur}, ${livre.anneePublication})`)
            );
        }
    }
}

class Bibliotheque {
    private livres: Livre[] = [];
    private utilisateurs: Utilisateur[] = [];

    ajouterLivre(livre: Livre): void {
        this.livres.push(livre);
        console.log(`Le livre "${livre.titre}" a été ajouté.`);
    }

    retirerLivre(id: number): void {
        const index = this.livres.findIndex((livre) => livre.id === id);
        if (index !== -1) {
            const livreSupprime = this.livres.splice(index, 1)[0];
            console.log(`Le livre "${livreSupprime.titre}" a été retiré.`);
        } else {
            console.log(`Aucun livre avec l'ID ${id} n'a été trouvé.`);
        }
    }

    ajouterUtilisateur(utilisateur: Utilisateur): void {
        this.utilisateurs.push(utilisateur);
        console.log(`L'utilisateur ${utilisateur.nom} a été ajouté.`);
    }

    emprunterLivre(idLivre: number, emailUtilisateur: string): void {
        const livre = this.livres.find((l) => l.id === idLivre);
        const utilisateur = this.utilisateurs.find((u) => u.email === emailUtilisateur);

        if (livre && utilisateur) {
            utilisateur.emprunterLivre(livre);
        } else {
            console.log("Livre ou utilisateur introuvable.");
        }
    }

    retournerLivre(idLivre: number, emailUtilisateur: string): void {
        const livre = this.livres.find((l) => l.id === idLivre);
        const utilisateur = this.utilisateurs.find((u) => u.email === emailUtilisateur);

        if (livre && utilisateur) {
            utilisateur.retournerLivre(livre);
        } else {
            console.log("Livre ou utilisateur introuvable.");
        }
    }

    listerLivres(): void {
        if (this.livres.length === 0) {
            console.log("Aucun livre dans la bibliothèque.");
        } else {
            console.log("Liste des livres :");
            this.livres.forEach((livre) => {
                console.log(
                    `- [${livre.disponibilite}] ${livre.titre} (${livre.auteur}, ${livre.anneePublication})`
                );
            });
        }
    }
}



const biblio = new Bibliotheque();

const livre1 = new Livre("Les Misérables", "Victor Hugo", 1862);
const livre2 = new Livre("1984", "George Orwell", 1949);
const livre3 = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry", 1943);

biblio.ajouterLivre(livre1);
biblio.ajouterLivre(livre2);
biblio.ajouterLivre(livre3);

const utilisateur1 = new Utilisateur("Alice Dupont", "alice@example.com");
const utilisateur2 = new Utilisateur("Bob Martin", "bob@example.com");

biblio.ajouterUtilisateur(utilisateur1);
biblio.ajouterUtilisateur(utilisateur2);

biblio.emprunterLivre(livre1.id, "alice@example.com");
biblio.emprunterLivre(livre2.id, "bob@example.com");

biblio.listerLivres();

biblio.retournerLivre(livre1.id, "alice@example.com");

biblio.listerLivres();
utilisateur1.listerLivresEmpruntes();
utilisateur2.listerLivresEmpruntes();
