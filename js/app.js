// Jer dois créer une code qui me permet, lorsque je clique sur mle bouton, d'afficher un résultat au hasard (pile ou face) et que l'image et le p change en fonction du résultat. 

// Etape 1 : Récupérer les éléments du DOM 
const coinImage = document.getElementById("coin");
const coinText = document.getElementById("text");
const button = document.getElementById("button");


//Etape 2 : Créer un événement Click
button.addEventListener("click", () => { //Le handler signifie, si quelqu'un fait l'action entre parenthèse, ici "click", alors => execute la fonction (le handler)

    // Etape bonus : ajout de l'animation
    // Etape bonus 1 = lancer l'animation avant que la condition ne se produit
    coinImage.classList.add("spin");

    // Etape bonus 2 = définir un minuteur pour que la fonction s'exécute plus tard
    setTimeout( () => { //setTimeout(quoi_faire, quand_le_faire);
        // Etape 3 : Générer un résultat aléatoire
        const randomNumber = Math.floor(Math.random() * 2);

        // Etape 4 : Créer ma Condition    
        if (randomNumber === 0) {
            // Etape 4.1 = Changer l'image
            coinImage.src = "resources/heads.svg";
            // Etape 4.1.1 = déclencher l'animation

            // Etape 4.2 = Change le texte
            coinText.textContent = "Head";
        } else {
            // Etape 4.1 = Changer l'image
            coinImage.src = "resources/tails.svg";
            // Etape 4.2 = Change le texte
            coinText.textContent = "Tail";
        }

        // Etape bonus 3 = retirer la classe pour relancer l'animation
        coinImage.classList.remove("spin"); 
    }, 600);

})
