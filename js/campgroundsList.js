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
      imgCampground.src = `../Assets/Camp Images/Compressed Images/${campground}.jpg`;
      imgCampground.alt = `Image of ${campground}`;

      const divDescription = document.createElement('div');

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

      const submittorName = document.getElementById('submittor-name');
      submittorName.innerHTML = campgroundObj["Campground Submittor"];

      divSubmittor.innerHTML = `Submitted by ${submittorName}`;

      divDescription.append(h2, price, description, divSubmittor);

      const divTestimonials = document.createElement('div');
      divTestimonials.classList.add('div-testimonials');

      const listTestimonials = document.createElement('ul');
      listTestimonials.classList.add('list-testimonials');

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

      divTestimonials.append(listTestimonials);

      main.append(imgCampground, divDescription, divTestimonials);
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
      window.location.href = './campgroundPage.html';
      openCampgroundPage(campground);
    });
  }
});