# interaction-react-avec-api (Redux Toolkit Version)


Bon courage :D essayez de faire cet exercice sans utiliser AI svp 



Dans ce projet, vous allez **reconstruire votre application de blog** en utilisant **Redux Toolkit** .

Vous avez déjà réalisé cette application sans Redux.  
Cette fois, l’objectif est de :

- Centraliser l’état global (toutes les données importantes au même endroit)
- Mieux organiser votre application
- Gérer les appels API de manière professionnelle
- Comprendre **pourquoi Redux est utilisé dans les vrais grands projets**

---



## API à utiliser

Vous allez utiliser cette API pour toutes vos opérations (GET, POST, DELETE, PUT) :

https://server-1-zoux.onrender.com/api/post

---

## Étape 1 — Installation

Installez les outils nécessaires pour utiliser Redux dans votre projet.

---
## Étape 2 — Connecter Redux à React

Vous devez connecter votre application React avec votre store Redux pour permettre à tous vos composants d’accéder aux données globales.

- Envelopper votre application avec le Provider
- Donner accès au store à toute l’application

---
## Étape 3 — Création du Store

Vous devez créer un **store global**.

Ce store va contenir toutes les données de votre application

- Créer un fichier dédié au store
- Configurer Redux Toolkit
- Connecter votre futur "slice" des posts au store

---


## Étape 4 — Création du Slice

Vous devez créer un **slice pour gérer les posts**.

- Définir l’état initial
- Créer des actions
- Gérer la logique de mise à jour du state


---

## Étape 5 — Récupérer les posts (GET)

Vous devez récupérer les posts depuis l’API .

- Créer une fonction asynchrone avec Redux Toolkit
- Envoyer une requête GET vers l’API
- Stocker les résultats dans le store
- Vous devez aussi gérer Les erreurs si la requête échoue



---


## Étape 6 — Afficher les posts

Dans votre composant d’affichage des posts Lire les données depuis Redux (et non plus depuis un state local).
Vous ne devez plus utiliser `useState` pour stocker les posts.

- Récupérer les posts depuis le store
- Lancer la récupération des posts au chargement
- Afficher :
  - la liste des posts


---

## Étape 7 — Ajouter un post (POST)

Vous devez permettre à l’utilisateur de créer un nouveau post et envoyer les données du formulaire vers l’API.

- Créer une fonction asynchrone pour envoyer les données
- Relier votre formulaire à Redux
- Mettre à jour le store après l’ajout

Après l’ajout d’un post, vous avez 2 choix :
- Recharger toute la liste depuis l’API
- Ou ajouter directement le nouveau post dans le store


---

## Étape 8 — Supprimer un post (DELETE)

Vous devez permettre de supprimer un post.

- Créer une fonction asynchrone pour la suppression
- Mettre à jour le state après suppression

faits attention l’interface doit se mettre à jour immédiatement.

---

## Étape 9 — Modifier un post (EDIT)

Vous devez implémenter la modification d’un post permettre à l’utilisateur de modifier un article existant.
Vous devez identifier correctement le post à modifier.

- Créer une fonctionnalité d’édition (formulaire pré-rempli)
- Envoyer les nouvelles données à l’API
- Mettre à jour le post dans Redux


---

## Étape 10 — Recherche (Redux mindset)

Vous devez implémenter une recherche **en utilisant Redux**.

Redux ne sert pas seulement aux données, mais aussi à l’état de l’interface.

- Stocker la valeur du champ de recherche dans Redux
- Mettre à jour cette valeur à chaque saisie
- Filtrer les posts à partir de cette valeur



---

