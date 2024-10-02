function openYTVideo() {
    const ytVideoLink = document.getElementById('yt-video-link').getAttribute('href');
    const videoId = ytVideoLink.split('v=')[1];
    const iframeSrc = `https://www.youtube.com/embed/${videoId}`;
    localStorage.setItem('ytVideoSrc', iframeSrc);
    window.location.href = 'yt-video.html';
}

function openModrinthProject() {
    const modrinthProjectLink = document.getElementById('modrinth-project-link').getAttribute('href');
    localStorage.setItem('modrinthProjectLink', modrinthProjectLink);
    window.location.href = 'modrinth-project.html';
}
