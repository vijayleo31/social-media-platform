document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
  });
  
  async function loadPosts() {
    try {
      const response = await fetch('/api/posts'); // Your posts endpoint
      const posts = await response.json();
  
      const postList = document.getElementById('post-list');
      postList.innerHTML = '';
  
      posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = `
          <h3>${post.username}</h3>
          <p>${post.content}</p>
        `;
        postList.appendChild(postEl);
  
        // Animation on load
        postEl.classList.add('fade-in');
      });
    } catch (error) {
      console.error('Error loading posts:', error);
    }
  }
  