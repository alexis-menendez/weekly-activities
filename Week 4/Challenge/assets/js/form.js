// Select the form element and error message element
const form = document.querySelector('form');
const errorMessage = document.getElementById('error');

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); 

  // Get form values
  const username = document.getElementById('username').value.trim();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  // Check for empty fields
  if (!username || !title || !content) {
    errorMessage.textContent = 'Please complete the form.';
    errorMessage.classList.add('visible'); // Show error message
    return;
  }

  // Create blog post object
  const blogPost = {
    username: username,
    title: title,
    content: content
  };

  // Retrieve existing blog posts from local storage using readLocalStorage
  let blogPosts = readLocalStorage('blogPosts');

  // Add new blog post to the array
  blogPosts.push(blogPost);

  // Save updated array back to local storage
 localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

  // Redirect to the blog page
  redirectPage('blog.html');
}

// Event listener for form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', handleFormSubmission);
  }
});
