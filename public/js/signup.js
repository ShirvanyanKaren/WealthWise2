const signup = async (event) => {
  event.preventDefault();
  const body = JSON.stringify({
    username: document.querySelector("#signup-name").value,
    email: document.querySelector("#signup-email").value,
    password: document.querySelector("#signup-password").value,
  });
  const response = await fetch("/api/user/signup", {
    method: "POST",
    body: body,
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
    console.log();
  }
};

document.querySelector(".signup-form").addEventListener("submit", signup);
document.querySelector("#login").addEventListener("click", function () {
  document.location.replace("/login");
});