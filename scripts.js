/**
 * Fonction principale exécutée lorsque le DOM est entièrement chargé.
 * Définit les constantes et ajoute les écouteurs d'événements nécessaires.
 */
document.addEventListener('DOMContentLoaded', () => {
  // URL de base de l'API
  const API_URL = 'https://carambarbackend.onrender.com/api';

  /**
   * Récupère et affiche la liste des blagues depuis l'API.
   */
  const fetchJokes = async () => {
    try {
      // Effectue une requête GET pour obtenir toutes les blagues
      const response = await fetch(`${API_URL}/jokes`);
      // Vérifie si la réponse est OK (statut HTTP 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Convertit la réponse en JSON
      const jokes = await response.json();
      // Sélectionne l'élément ul pour afficher les blagues
      const jokesList = document.getElementById('jokes');
      jokesList.innerHTML = '';
      // Parcourt chaque blague et l'ajoute à la liste
      jokes.forEach(joke => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<strong>${joke.question}</strong>: ${joke.answer}`;
        jokesList.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  /**
   * Ajoute une nouvelle blague via l'API.
   * @param {Object} joke - L'objet blague à ajouter avec les propriétés question et answer.
   */
  const addJoke = async (joke) => {
    try {
      // Effectue une requête POST pour ajouter une nouvelle blague
      const response = await fetch(`${API_URL}/addjokes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(joke)
      });
      // Vérifie si la réponse est OK (statut HTTP 200-299)
      if (response.ok) {
        // Affiche un message de confirmation
        const confirmationMessage = document.getElementById('confirmation-message');
        confirmationMessage.style.display = 'block';
        confirmationMessage.innerText = 'Joke added successfully!';
        setTimeout(() => {
          confirmationMessage.style.display = 'none';
        }, 3000);
        // Actualise la liste des blagues
        fetchJokes();
      } else {
        console.error('Error adding joke:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding joke:', error);
    }
  };

  /**
   * Récupère une blague par son ID via l'API.
   * @param {number} id - L'ID de la blague à récupérer.
   * @returns {Object} La blague récupérée.
   */
  const getJokeById = async (id) => {
    try {
      // Effectue une requête GET pour obtenir une blague par ID
      const response = await fetch(`${API_URL}/jokes/${id}`);
      // Vérifie si la réponse est OK (statut HTTP 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Convertit la réponse en JSON
      const joke = await response.json();
      return joke;
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  /**
   * Récupère une blague aléatoire via l'API.
   * @returns {Object} La blague aléatoire récupérée.
   */
  const getRandomJoke = async () => {
    try {
      // Effectue une requête GET pour obtenir une blague aléatoire
      const response = await fetch(`${API_URL}/randomjokes`);
      // Vérifie si la réponse est OK (statut HTTP 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Convertit la réponse en JSON
      const joke = await response.json();
      return joke;
    } catch (error) {
      console.error('Error fetching random joke:', error);
    }
  };

  /**
   * Gestionnaire de soumission du formulaire pour ajouter une blague.
   * @param {Event} e - L'événement de soumission du formulaire.
   */
  document.getElementById('joke-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;
    addJoke({ question, answer });
    e.target.reset();
  });

  /**
   * Gestionnaire de soumission du formulaire pour rechercher une blague par ID.
   * @param {Event} e - L'événement de soumission du formulaire.
   */
  document.getElementById('search-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('joke-id').value;
    const result = await getJokeById(id);
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = result ? `<strong>${result.question}</strong>: ${result.answer}` : 'Joke not found';
  });

  /**
   * Gestionnaire de clic pour obtenir une blague aléatoire.
   */
  document.getElementById('get-random-joke')?.addEventListener('click', async () => {
    const result = await getRandomJoke();
    const randomJokeResult = document.getElementById('random-joke-result');
    randomJokeResult.innerHTML = `<strong>${result.question}</strong>: ${result.answer}`;
  });

  // Initial fetch of jokes if on jokes list page
  if (document.getElementById('jokes')) {
    fetchJokes();
  }
});
