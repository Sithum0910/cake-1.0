let cakes = JSON.parse(localStorage.getItem("cakes")) || [];

function renderCakes() {
  const container = document.getElementById("cakeGallery");
  container.innerHTML = "";
  cakes.forEach((cake, index) => {
    const div = document.createElement("div");
    div.className = "cake-item";
    div.innerHTML = `
      <img src="${cake.image}" alt="${cake.name}">
      <h4>${cake.name}</h4>
      ${isAdmin() ? `<div class="admin-controls"><button onclick="removeCake(${index})">Delete</button></div>` : ""}
    `;
    container.appendChild(div);
  });
}

function addCake() {
  const name = document.getElementById("cakeName").value;
  const image = document.getElementById("cakeImage").value;
  if (!name || !image) return alert("Please fill both fields!");
  cakes.push({ name, image });
  localStorage.setItem("cakes", JSON.stringify(cakes));
  renderCakes();
}

function removeCake(index) {
  cakes.splice(index, 1);
  localStorage.setItem("cakes", JSON.stringify(cakes));
  renderCakes();
}

function login() {
  const password = document.getElementById("adminPass").value;
  if (password === "admin123") {
    localStorage.setItem("admin", "true");
    document.getElementById("adminPanel").classList.remove("hidden");
    document.getElementById("loginModal").classList.add("hidden");
    renderCakes();
  } else {
    alert("Wrong password");
  }
}

function logout() {
  localStorage.removeItem("admin");
  document.getElementById("adminPanel").classList.add("hidden");
  renderCakes();
}

function isAdmin() {
  return localStorage.getItem("admin") === "true";
}

document.getElementById("adminLoginBtn").addEventListener("click", () => {
  if (isAdmin()) {
    document.getElementById("adminPanel").classList.toggle("hidden");
  } else {
    document.getElementById("loginModal").classList.remove("hidden");
  }
});

renderCakes();
