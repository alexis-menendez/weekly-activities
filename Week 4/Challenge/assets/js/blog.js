document.addEventListener('DOMContentLoaded', () => {
    const mainElement = document.querySelector('main');
    const backButton = document.getElementById('back');
  
    if (backButton) {
      backButton.addEventListener('click', () => {
        redirectPage('index.html');
      });
    }
  
    function displayNoPostsMessage() {
      const message = createElement('p', 'no-posts', 'No Blog posts yet...');
      mainElement.appendChild(message);
    }
  
    function renderBlogList() {
      let blogPosts = [];
      try {
        const storedData = localStorage.getItem('blogPosts');
        blogPosts = storedData ? JSON.parse(storedData) : [];
      } catch (error) {
        console.error('Error parsing blogPosts from localStorage:', error);
        blogPosts = [];
      }
  
      mainElement.innerHTML = '';
      if (!Array.isArray(blogPosts) || blogPosts.length === 0) {
        displayNoPostsMessage();
        return;
      }
  
      const ul = createElement('ul', 'blog-list');
  
      blogPosts.forEach((post) => {
        if (!post.username || !post.title || !post.content) return;
        const li = createElement('li', 'blog-post');
        const article = createElement('article', 'card');
        const title = createElement('h2', '', post.title);
        const content = createElement('blockquote', '', post.content);
        const author = createElement('p', '', `By: ${post.username}`);
  
        article.appendChild(title);
        article.appendChild(content);
        article.appendChild(author);
        li.appendChild(article);
        ul.appendChild(li);
      });
  
      mainElement.appendChild(ul);
    }
  
    renderBlogList();
  });
  