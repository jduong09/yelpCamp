const openCampgroundPage = (campground) => {
  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    if (xhr.readyState === 4) {
      const campgroundsList = xhr.response;

      const campgroundObj = campgroundsList[campground];
      console.log(campgroundObj);

      window.location.href = './campgroundPage.html';

      const h2 = document.querySelector('h2');
      h2.innerHTML = campground;

      const price = document.getElementById("campground-price");
      price.innerHTML = campgroundObj["Price"];

      const description = document.querySelector("div-campground-description");
      description.innerHTML = campgroundObj["Description"];

      const submittorName = document.getElementById('submittor-name');
      submittorName.innerHTML = campgroundObj["Campground Submittor"];

      const listTestimonials = document.querySelector("list-testimonials");
      listTestimonials.innerHTML = '';
      for (let i = 0; i < campgroundObj["Comments"]; i++) {
        const comment = campgroundObj["Comments"][i];

        const commentListItem = document.createElement('li');
        commentListItem.classList.add('list-item-testimonial');

        const commentDiv = document.createElement('div');
        const commentAuthor = document.createElement('h3');
        commentAuthor.innerHTML = comment["Author"];
        
        const commentTime = document.createElement('span');
        commentTime.innerHTML = comment["Time"];

        const commentBody = document.createElement('div');
        commentBody.innerHTML = comment["Comment"];

        commentDiv.append(commentAuthor, commentTime, commentBody);
        commentListItem.append(commentDiv);

        listTestimonials.append(commentListItem);
      }
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