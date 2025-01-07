User Story:
AS A marketing student
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences.

Acceptance Criteria
GIVEN a personal blog
WHEN I load the app
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content
WHEN I try to submit a form without a username, title, or content
THEN I am presented with a message that prompts me to complete the form.
WHEN I submit the form
THEN blog post data is stored to local storage
WHEN the form submits
THEN I am redirected to the posts page
WHEN I view the posts page
THEN I am presented with a header, a light mode/dark mode toggle, and a "Back" button
WHEN I click the light mode/dark mode toggle
THEN the page content's styles update to reflect the selection
WHEN I click the "Back" button
THEN I am redirected back to the landing page where I can input more blog entries
WHEN I view the main content
THEN I am presented with a list of blog posts that are pulled from local storage
WHEN I view local storage
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content
WHEN I take a closer look at a single blog entry in the list
THEN I can see the title, the content, and the author of the post


Grading Requirements:
This Challenge is graded based on the following criteria:

1. Landing Page: The landing page should contain the following HTML (5 pts):
- A form element that contains the following:
        - An [input] element whose label and id are [username].
        - An [input] element whose label and id are [title].
        - A [textarea] element whose label and id are content.
        - A [p] element whose id is [error].

2. Landing Page: The form must use the following logic: (30 pts)
- Display the error message ["Please complete the form."] when the form is submitted with empty fields. (10 pts)
- Store form data in local storage when submitted with valid data. (10 pts)
- Blog post objects in local storage must contain [username], [title], and [content] properties. (5 pts)
- Redirect to the blog page when valid data is submitted. (5 pts)

3. Blog Page HTML: The blog page must contain the following HTML: (10 pts)
- A [header] element that contains (5 pts):
        - A light mode/dark mode toggle. The toggle element can be anything you like, but the id must be [toggle].
        - A "Back" button with an id of [back].
- A [main] element (5 pts):

4. Toggle Logic: When the light mode/dark mode toggle is clicked: (20pts)
- When the light mode/dark mode toggle is clicked:
- The [--circle-color] attribute changes to match the mode. (10 pts)

5. Blog Post Logic: The Blog Post page must perform the following: (35pts)
- Render blog posts to the page with data pulled from [localStorage]. (10 pts)
- Rendered blog posts must include the author's [username], and the post's [title] and [content]. (10 pts)
- If no blog posts are found in [localStorage], display a message that states: ["No Blog posts yet..."]. (10 pts)
- Redirect the user to the landing page when the "Back" button is clicked. (5 pts)
