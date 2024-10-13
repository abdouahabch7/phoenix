const apiKey = 'AIzaSyB7oJ0rPJc1n1ZAR5-IR7HKDvv5Sa8eIlA';
const channelId = 'UCsiPEepy5dzC4o3nxCDiQ-w';
const maxResults = 6; // Adjust this number to control how many videos to display

const videoContainer = document.getElementById('video-container');

// Fetch videos from YouTube API
fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`)
    .then(response => response.json())
    .then(data => {
        data.items.forEach(item => {
            const videoId = item.id.videoId;
            const videoTitle = item.snippet.title;
            const thumbnailUrl = item.snippet.thumbnails.high.url;

            // Create video elements
            const videoElement = document.createElement('div');
            videoElement.classList.add('video-item');

            videoElement.innerHTML = `
                <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
                    <img src="${thumbnailUrl}" alt="${videoTitle}">
                </a>
                <h3>${videoTitle}</h3>
            `;

            videoContainer.appendChild(videoElement);
        });
    })
    .catch(error => console.error('Error fetching videos:', error));

// Function to navigate back
function navigateBack() {
    window.location.href = 'index.html';
}
