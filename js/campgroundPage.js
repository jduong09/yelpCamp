const openCampgroundPage = (campground) => {
  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    if (xhr.readyState === 4) {
      const campgroundsList = JSON.parse(xhr.response);


      const campgroundObj = campgroundsList[campground];
      const main = document.querySelector('main');
      main.innerHTML = '';

      // Append img, divDescription, divTestimonials, divCampgroundLocation to main.

      const divCampgroundInfo = document.createElement('div');
      divCampgroundInfo.classList.add('div-campground-info');
      const imgCampground = document.createElement('img');
      imgCampground.classList.add('img-campground');
      imgCampground.src = campgroundObj["Image"];
      imgCampground.alt = `Image of ${campground}`;

      const h2 = document.createElement('h2');
      h2.innerHTML = campgroundObj["Name"];

      const price = document.createElement('span');
      price.id = 'campground-price';
      price.innerHTML = `$${campgroundObj["Price"]}/night`;

      const description = document.createElement("div");
      description.classList.add("div-campground-description");
      description.innerHTML = campgroundObj["Description"];

      const divSubmittor = document.createElement('div');
      divSubmittor.classList.add('div-submittor');

      const submittorName = document.createElement('span');
      submittorName.id = 'submittor-name';
      submittorName.innerHTML = campgroundObj["Campground Submittor"];

      divSubmittor.innerHTML = `Submitted by `;
      divSubmittor.append(submittorName);

      divCampgroundInfo.append(h2, price, description, divSubmittor);

      const divTestimonials = document.createElement('div');
      divTestimonials.classList.add('div-testimonials');

      const listTestimonials = document.createElement('ul');
      listTestimonials.classList.add('list-testimonials');

      for (let i = 0; i < campgroundObj["Comments"].length; i++) {
        const comment = campgroundObj["Comments"][i];

        const commentListItem = document.createElement('li');
        commentListItem.classList.add('list-item-testimonial');

        const commentAuthor = document.createElement('h3');
        commentAuthor.innerHTML = comment["Author"];
        
        const commentTime = document.createElement('span');
        commentTime.innerHTML = comment["Time"];

        const commentBody = document.createElement('div');
        commentBody.innerHTML = comment["Comment"];

        commentListItem.append(commentAuthor, commentTime, commentBody);

        listTestimonials.append(commentListItem);
      }

      divTestimonials.append(listTestimonials);

      main.append(imgCampground, divDescription, divTestimonials);
    }
  }

  xhr.open('GET', './campgrounds.json', true);
  xhr.send();
};

document.addEventListener('DOMContentLoaded', () => {
  const campground = localStorage.getItem('campgroundName');
  openCampgroundPage(campground);
})