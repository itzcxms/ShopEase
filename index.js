const liste_produits = [
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
    let total = produits.reduce((sum, produit) => sum + produit.prix, 0);
    prix_total.textContent = total;

}

function filtrage_produits() {
    let contenu = recherche_input.value;
    let produits_filtres = produits.filter(produit => produit.nom.includes(contenu))
    afficher_produits(produits_filtres)
}

// fonction pour supprimer un produit

// Événement sur le champ de recherche
recherche_input.addEventListener("keyup", filterProducts);

// réinitialiser

afficher_produits(liste_produits);