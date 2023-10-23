document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
  
    searchButton.addEventListener('click', function () {
      const query = searchInput.value;

      searchResults.textContent = `You searched for: ${query}`;
    });
  });
  