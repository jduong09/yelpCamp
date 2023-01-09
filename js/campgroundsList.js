const openCampgroundPage = (campground) => {
  switch (campground) {
    case 'Mount Ulap':
      openCampgroundPage('Mount_Ulap');
      break;
    case 'Calaguas Islands':
      openCampgroundPage('Calaguas_Islands')
      break;
    case 'Onay Beach':
      openCampgroundPage('Onay_Beach');
      break;
    case 'Latik Riverside':
      openCampgroundPage('Latik_Riverside');
      break;
    case 'Buloy Springs':
    openCampgroundPage('Buloy_Springs');
    break;
    default:
      break;
  }
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