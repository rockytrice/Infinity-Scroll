const imageContainer = document.getElementById('image-container');
let photosArray = [];

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//  create elements for links and photo, and add to DOM
function displayPhoto() {
  // run for each object in photosArray
  photosArray.forEach((photo) => {
    // Create a tag to link to Unsplash
    const item = document.createElement('a');
    // create image for photo
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.description,
    });
    // put img inside of anchor element then put them both inside of img container element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Unsplash API
const count = 10;
const apiKey = config.API_KEY;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// fetch photos from unsplash API
async function getPhotos() {
  try {
    const res = await fetch(apiUrl);
    photosArray = await res.json();
    displayPhoto();
  } catch (error) {}
}
//on load
getPhotos();
