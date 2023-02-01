// select post ID from the input element with name "post-id"
const post_id = document.querySelector('input[name="post-id"]').value.trim();

// submit event for comment form
const commentFormHandler = async (event) => {
  event.preventDefault();

  // Get the content of the comment from the textarea element with name "comment-body"
  const content = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();

  // If the content is not empty
  if (content) {
    // Send a POST request to the /api/comment endpoint with the post_id and content in the body
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // If the response is successful
    if (response.ok) {
      // Reload the page
      document.location.reload();
    } else {
      // Show an alert with the error message
      alert(response.statusText);
    }
  }
};

// Add an event listener to the comment form that listens for the submit event and calls commentFormHandler
document
  .querySelector("#new-comment-form")
  .addEventListener("submit", commentFormHandler);
