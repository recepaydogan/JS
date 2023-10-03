const apiKey = "k3YMymAgrZZ2bmo7OOQiAOdjZcl3AHgHmT6naWlXsw4";
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const imgContainer = document.getElementById("imageDiv");
const loader = document.querySelector("#loading");
let imagesArray = [];
let imagesLoaded = 0;

async function getImagesRequest() {
  try {
    let response = await fetch(apiUrl);
    imagesArray = await response.json();
    console.log(imagesArray);
    displayImages();
  } catch (err) {}
}

function displayImages() {
  imagesLoaded = 0;
  let totalImages = imagesArray.length;
  imagesArray.forEach((image) => {
    const item = document.createElement("a");
    const img = document.createElement("img");
    setAttributes(item, { href: image.urls.regular });
    setAttributes(img, {
      src: image.urls.regular,
      alt: image.alt_description,
    });
    setAttributes(item, { target: "_blank" });
    img.addEventListener("load", () => {
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
        loader.hidden = true;
      }
    });
    item.appendChild(img);
    imgContainer.appendChild(item);
  });
}
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

document.addEventListener("scroll", () => {
  if (window.scrollY + 3000 >= document.body.offsetHeight) {
    getImagesRequest();
  }
});

getImagesRequest();
