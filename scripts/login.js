const loginForm = document.querySelector(".login__form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (!username || !password) {
    return alert("enter all fields");
  }

  loginUser(username, password);
});

function loginUser(username, password) {
  const users = getUsersFromLocalStorage();

  const currentUser = users.find((user) => {
    return user.username === username && user.password === password;
  });

  if (currentUser === undefined) {
    return alert("invalid username or password");
  }
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  localStorage.setItem("token", currentUser.username);
  location.href = "../all/quiz.html";
}
