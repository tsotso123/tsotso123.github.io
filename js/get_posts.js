document.addEventListener('DOMContentLoaded', () => {
	
    fetch(`https://serverbackend.azurewebsites.net/api/PostContentApi/posts`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementsByClassName('container_posts')[0];
            data.forEach(item => {

                const post = document.createElement('article');

                post.className = 'post';

                const title = document.createElement('h2');
                title.textContent = item["title"];
                post.appendChild(title);

                const date = document.createElement('p');
                date.className = "meta";
                date.textContent = item["date"];
                post.appendChild(date);

                const link = document.createElement('a');
                link.className = "read-more";
                link.href = "https://serverbackend.azurewebsites.net/PostView?id=" + item["id"];
                link.textContent = 'Read More';

                post.appendChild(link);

                container.appendChild(post);
                
            });
        })
        .catch(error => console.error('Error fetching post:', error));
});

