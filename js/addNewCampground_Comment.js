document.addEventListener('DOMContentLoaded', () => {
  const newCampgroundSubmitInput = document.getElementById('btn-submit');

  newCampgroundSubmitInput.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href="./search.html";
  })
});