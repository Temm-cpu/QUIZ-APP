let usertoken = localStorage.getItem("token");
let currentUser = localStorage.getItem

function getUsersFromLocalStorage() {
  const users = localStorage.getItem("users");
  if (!users) {
    return [];
  }
  return JSON.parse(users);
}

function saveUserToLocalStorage(user) {
  let users = getUsersFromLocalStorage();
  users = [...users, user];
  localStorage.setItem("users", JSON.stringify(users));
}

const logoutBtn = document.querySelector(".logout");

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  localStorage.removeItem("currentUser");
  location.reload();
});
