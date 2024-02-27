

const cardRows = document.querySelector('.cardRow');
const displayBtn = document.querySelector('.displayBtn');
const videoContainer = document.querySelector('.videoContainer');
const dismiss = document.querySelector('.dismiss');


const showMovie = (movie) => {
    console.log(movie);
    displayBtn.click()
    const iframe = document.createElement('iframe');

    // Set attributes
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '315');
    iframe.setAttribute('src', movie.link);
    iframe.setAttribute('title', 'YouTube video player');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('allowfullscreen', '');
    videoContainer.appendChild(iframe);
        
            // Create modal elements
        

}

const getCardElement = (content) => {
    // Create the outer div with classes
const colDiv = document.createElement('div');
colDiv.classList.add('col-6', 'col-md-3', 'col-lg-3');

// Create the main content div
const contentDiv = document.createElement('div');
contentDiv.classList.add('myContent');

// Create the container for the image and backdrop
const imageContainer = document.createElement('div');
imageContainer.style.position = 'relative';

// Create the image element
const img = document.createElement('img');
img.src = content.thumbnail;
img.classList.add('card-img-top');
img.alt = content.name;
img.style.borderRadius = '5px';

// Create the backdrop div
const backdropDiv = document.createElement('div');
backdropDiv.classList.add('backdrop');

// Create the play button div
const playButtonDiv = document.createElement('div');
playButtonDiv.classList.add('playbutton');

playButtonDiv.addEventListener('click',()  => showMovie(content));

// Append the play button to the backdrop
backdropDiv.appendChild(playButtonDiv);

// Append the image and backdrop to the image container
imageContainer.appendChild(img);
imageContainer.appendChild(backdropDiv);

// Create the card body div
const cardBodyDiv = document.createElement('div');
cardBodyDiv.classList.add('card-body',);

// Create the title paragraph
const titlePara = document.createElement('p');
titlePara.classList.add('card-text', 'title');
titlePara.textContent = content.name;

// Create the content type div
const contentTypeDiv = document.createElement('div');
contentTypeDiv.classList.add('contentType');

// Create the content type paragraph
const contentTypePara = document.createElement('p');
contentTypePara.classList.add('card-text');
contentTypePara.textContent = 'Music';

// Append the content type paragraph to the content type div
contentTypeDiv.appendChild(contentTypePara);

// Append the title paragraph and content type div to the card body
cardBodyDiv.appendChild(titlePara);
cardBodyDiv.appendChild(contentTypeDiv);

// Append the image container and card body to the main content div
contentDiv.appendChild(imageContainer);
contentDiv.appendChild(cardBodyDiv);

// Append the main content div to the column div
colDiv.appendChild(contentDiv);

// Append the column div to the container

    return cardRows.appendChild(colDiv)

}

const data = async function() {
    try {
      const response = await axios.get('https://streamzbucket01.s3.amazonaws.com/videos.json');
      const movies = response.data;
      console.log(movies);
      
      const { data } = movies;
      // Append the card to the cardRows element
      data?.forEach(el => getCardElement(el));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
}
dismiss.addEventListener('click', () => {
    videoContainer.innerHTML='';
})
const myModalEl = document.getElementById('myModal')




data();



