document.addEventListener('DOMContentLoaded', () => {
    const postId = getQueryParameter('id'); // Assume you have a query parameter for the post ID
    console.log(postId);
    fetch(`https://webapplication120240912102918.azurewebsites.net/api/PostContentApi/${postId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('post-title').textContent = data.title;
            document.getElementById('post-date').textContent = new Date(data.date).toLocaleDateString();
            document.getElementById('post-content').innerHTML = data.content;
        })
        .catch(error => console.error('Error fetching post:', error));
});

function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
