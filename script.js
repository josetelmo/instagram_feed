const accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN';
const userId = 'YOUR_INSTAGRAM_USER_ID';
const numPhotos = 9; // Número de fotos a serem exibidas

async function fetchInstagramFeed() {
    const url = `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,permalink&access_token=${accessToken}`;
    const response = await fetch(url);
    const data = await response.json();
    displayPhotos(data.data);
}

function displayPhotos(photos) {
    const feedContainer = document.getElementById('instagram-feed');
    photos.slice(0, numPhotos).forEach(photo => {
        if (photo.media_type === 'IMAGE' || photo.media_type === 'CAROUSEL_ALBUM') {
            const img = document.createElement('img');
            img.src = photo.media_url;
            img.alt = 'Instagram Photo';
            feedContainer.appendChild(img);
        }
    });
}

fetchInstagramFeed();
