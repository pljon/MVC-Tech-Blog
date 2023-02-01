const newFormHandler = async (e) => {
  e.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim(),
    content = document.querySelector('textarea[name="post-body"]').value.trim();

  if (!title || !content) return alert("Cannot post due to empty fields! Please try again.");
  const res = await fetch("/api/post", {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  });
  
  if (res.ok) document.location.replace("/dashboard");
  else alert(res.statusText);
};

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler);
