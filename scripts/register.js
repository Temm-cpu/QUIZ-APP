const form = document.querySelector(".register");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fullname = form.fullname.value;
  const username = form.username.value;
  const password = form.password.value;

  if (!fullname || !username || !password) {
    return alert("All fields required");
  }
  if (!isUserExists(username)) {
    saveUserToLocalStorage({ fullname, username, password });
    alert(`Welcome ${fullname}`);
  } else {
    alert("username is in use");
  }
});

function isUserExists(username) {
  const users = getUsersFromLocalStorage();
  const user = users.find((user) => {
    return user.username === username;
  });
  return user ? true : false;
}
