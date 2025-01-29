let liste_produits = [
    { id: 1, nom: "Thé vert", prix: 12.99 },
    { id: 2, nom: "Café Arabica", prix: 8.99 },
    { id: 3, nom: "Infusion Camomille", prix: 5.49 },
    { id: 4, nom: "Café Robusta", prix: 9.99 },
];

const tableau_produits = document.getElementById("tableau_produits");
const prix_total = document.getElementById("prix_total");
const recherche_input = document.getElementById("recherche_input")
const reinitialiser_bouton = document.getElementById("reinitialiser_bouton");

// Afficher les produits dans le tableau
function afficher_produits(produits) {
    // vider le tableau
    tableau_produits.innerHTML = "";

    // on utilise map pour creer les lignes du tableau
    produits.map(produit => {
        const ligne = document.createElement("tr");

        // on insère le contenu de la ligne
        ligne.innerHTML = `
        <td>${produit.nom}</td>
        <td>${produit.prix}</td>
        <td><button onclick="supprimer_produit(${produit.id})">Supprimer</button></td>`;

        // on insère la ligne dans le tableau
        tableau_produits.appendChild(ligne);
    });

    // calcul du prix et affichage
    prix_total.textContent = produits.reduce((sum, produit) => sum + produit.prix, 0);

}

function filtrage_produits() {
    // on recupere le contenu qu'on a ecrit dans la barre de recherche
    let contenu = recherche_input.value;
    // on filtre si le contenu est inclus dans le nom d'un produit de notre liste
    let produits_filtres = liste_produits.filter(produit => produit.nom.includes(contenu))
    // on affiche seulement ceux qui répondent à la condition
    afficher_produits(produits_filtres)
}

// fonction pour supprimer un produit
function supprimer_produit(id) {
    // meme principe que le filtrage mais on regarde l'id direct
    liste_produits = liste_produits.filter(produit => produit.id !== id);
    // on rappelle la fonction pour afficher sans le produit supprimé
    afficher_produits(liste_produits)
}

// lancer la fonction quand on écrit dans la barre de recherche
recherche_input.addEventListener("keyup", filtrage_produits);

// on supprime ce qu'il y a dans la barre de recherche
reinitialiser_bouton.addEventListener("click", () => {
    recherche_input.value = "";
    afficher_produits(liste_produits);
});

afficher_produits(liste_produits);