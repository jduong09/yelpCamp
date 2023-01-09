const openCampgroundPage = (campground) => {
  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    if (xhr.readyState === 4) {
      console.log(xhr.response);
    }
  }

  xhr.open('GET', './campgrounds.json', true);
  xhr.send();
};

document.addEventListener('DOMContentLoaded', () => {
  const btnsViewCampground = document.getElementsByClassName('btn-view-campground');

  for (let i = 0; i < btnsViewCampground.length; i++) {
    const btnViewCampground = btnsViewCampground[i];

    btnViewCampground.addEventListener('click', (e) => {
      e.preventDefault();

      const campground = e.target.getAttribute('data-campground');

      openCampgroundPage(campground);
    });
  }
});