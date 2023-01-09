document.addEventListener('DOMContentLoaded', () => {
  const btnsViewCampground = document.getElementsByClassName('btn-view-campground');

  for (let i = 0; i < btnsViewCampground.length; i++) {
    const btnViewCampground = btnsViewCampground[i];

    btnViewCampground.addEventListener('click', (e) => {
      e.preventDefault();

      const campground = e.target.getAttribute('data-campground');
      window.location.href = `./campgroundPage.html/${campground}`;
    });
  }
});