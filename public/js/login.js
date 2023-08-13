const loginFormHandler = async (event) => {
  event.preventDefault();

  const user = document.querySelector("#user-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  console.log(user, password);

  if (user && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ user, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document.querySelector("#signUp").addEventListener("click", function () {
  document.location.replace("/signup");
});
