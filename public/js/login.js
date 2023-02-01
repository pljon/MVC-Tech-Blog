const loginFormHandler = async (event) => {
  event.preventDefault();

  const [name, password] = ["#name-login", "#password-login"].map((selector) =>
    document.querySelector(selector).value.trim()
  );

  if (name && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });
    
    response.ok
      ? document.location.replace("/dashboard")
      : alert("This user does not exist!");
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
