const fullname = document.querySelector(".fullname");
const userImage = document.querySelector(".profileImage");

function getUser() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return {
    token,
    currentUser,
  };
}

function getCurrentUser() {
  const { token, currentUser } = getUser();
  if (!currentUser) {
    return null;
  }
  fullname.textContent = currentUser.fullname;
  userImage.setAttribute("src", currentUser.profileImage);
}

getCurrentUser();
