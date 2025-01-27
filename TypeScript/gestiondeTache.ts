// Liste des Tâches à faire
enum EtatTache {
    AFAIRE = "À faire",
    ENCOURS = "En cours",
    TERMINE = "Terminé"
}

// Init de la Class Tâche
class Tache {
    constructor(
        public titre: string, 
        public description: string,
        public etat: EtatTache = EtatTache.AFAIRE
    ){}

    // Méthode de Changement d'état de la Tache
    changerEtat(nouvelEtat: EtatTache): void {
        this.etat = nouvelEtat;
    } 
}

// Définir la classe GestionnaireTaches
class GestionnaireTaches {
    private taches: Tache[] = [];

    // Add Tache
    ajouterTache(tache: Tache): void{
        this.taches.push(tache);
        console.log(`Tache ajoutée: ${tache.titre}`);
    }

    // delet Tache by title
    supprimerTache(titre: string): void {
        const index = this.taches.findIndex((tache) => tache.titre === titre);
        if (index !== -1) {
            const tacheSupprimee = this.taches.splice(index, 1)[0];
            console.log(`Tâche supprimée : ${tacheSupprimee.titre}`);
        } else {
            console.log(`Tâche non trouvée : ${titre}`);
        }
    }

    // Changer l'état d'une tâche par son titre
    changerEtatTache(titre: string, nouvelEtat: EtatTache): void {
        const tache = this.taches.find((t) => t.titre === titre);
        if (tache) {
            tache.changerEtat(nouvelEtat);
            console.log(`État modifié : ${tache.titre} est maintenant "${nouvelEtat}"`);
        } else {
            console.log(`Tâche non trouvée : ${titre}`);
        }
    }

    // Afficher la liste des tâches
    afficherTaches(): void {
        console.log("Liste des tâches :");
        this.taches.forEach((tache, index) => {
            console.log(`${index + 1}. [${tache.etat}] ${tache.titre} - ${tache.description}`);
        });
    }

}


// Exemple d'utilisation
const todolist = new GestionnaireTaches();

const task1 = new Tache("Faire les courses", "Acheter du pain et du lait");
const task2 = new Tache("Préparer à manger", "Prendre les ingrédient nécessaire", EtatTache.ENCOURS);
const task3 = new Tache("Faire du sport", "Aller à la salle de sport", EtatTache.TERMINE);

todolist.ajouterTache(task1);
todolist.ajouterTache(task2);
todolist.ajouterTache(task3);

todolist.afficherTaches();

todolist.changerEtatTache("Faire les courses", EtatTache.TERMINE);

todolist.afficherTaches();

todolist.supprimerTache("Préparer à manger");

todolist.afficherTaches();