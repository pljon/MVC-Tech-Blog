const postId = document.querySelector('input[name="post-id"]').value.trim();

const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const content = document
    .querySelector('textarea[name="post-body"]')
    .value.trim();

  console.log(title, content);

  try {
    const response = await fetch(`/api/post/${postId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (!response.ok) throw new Error("Failed to edit the post");
  } catch (error) {
    console.error(error);
  }

  document.location.replace("/dashboard");
};

const deletePostHandler = async () => {
  try {
    await fetch(`/api/post/${postId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }

  document.location.replace("/dashboard");
};

document
  .querySelector("#edit-post-form")
  .addEventListener("submit", editFormHandler);
document
  .querySelector("#delete-btn")
  .addEventListener("click", deletePostHandler);
