const postId = document.querySelector('input[name="post-id"]').value.trim();

// handles comment form submission
const handleCommentFormSubmit = async (event) => {
  event.preventDefault();

  const commentContent = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();

  // check to ensure comment is not empty
  if (commentContent) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        post_id: postId,
        content: commentContent,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#new-comment-form")
  .addEventListener("submit", handleCommentFormSubmit);
