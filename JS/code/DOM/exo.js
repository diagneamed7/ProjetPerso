const input = document.getElementById('tache');
const bouton = document.getElementById('ajouter');
const liste = document.getElementById('liste');

bouton.addEventListener("click", function () {
    const tache = input.value;

    // Vérifie si la tâche n'est pas vide ou composée uniquement d'espaces
    if (tache.trim() !== "") {
        // Crée un élément <li> pour la tâche
        const li = document.createElement("li");
        li.textContent = tache;

        // Crée un bouton "Supprimer" pour chaque tâche
        const supprimer = document.createElement("button");
        supprimer.textContent = "Supprimer";

        // Ajoute un gestionnaire d'événement pour supprimer l'élément <li>
        supprimer.addEventListener("click", function () {
            li.remove();
        });

        // Ajoute le bouton "Supprimer" au <li>
        li.appendChild(supprimer);

        // Ajoute le <li> à la liste
        liste.appendChild(li);

        // Réinitialise la valeur de l'input
        input.value = "";
    }
});
