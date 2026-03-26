const defaultProducts = [
  { id: 1, name: "Elegant Evening Dress", price: 12500, image: "images/item1.png", category: "women" },
  { id: 2, name: "Men's Casual Set", price: 8500, image: "images/item2.png", category: "men" },
  { id: 3, name: "Modern Saree", price: 18000, image: "images/item3.png", category: "women" },
  { id: 4, name: "Summer Floral Outfit", price: 7500, image: "images/item4.png", category: "women" }
];

const defaultLogo = "images/logo.png";
const defaultHero = "images/hero.png";

const defaultContact = {
    email: "info@kumudusalu.lk",
    phone: "070 226 0255",
    address: "No. 45, Main Street, Colombo 03, Sri Lanka"
};

// Initialize LocalStorage Data
if (!localStorage.getItem("kumudu_salu_products")) {
  localStorage.setItem("kumudu_salu_products", JSON.stringify(defaultProducts));
}
if (!localStorage.getItem("kumudu_salu_logo")) {
  localStorage.setItem("kumudu_salu_logo", defaultLogo);
}
if (!localStorage.getItem("kumudu_salu_contact")) {
  localStorage.setItem("kumudu_salu_contact", JSON.stringify(defaultContact));
}

// Helper methods
function getProducts() {
  return JSON.parse(localStorage.getItem("kumudu_salu_products"));
}

function saveProduct(product) {
  const products = getProducts();
  products.push(product);
  localStorage.setItem("kumudu_salu_products", JSON.stringify(products));
}

function getLogo() {
  return localStorage.getItem("kumudu_salu_logo");
}

function setLogo(dataUri) {
  localStorage.setItem("kumudu_salu_logo", dataUri);
}

function getContactDetails() {
  return JSON.parse(localStorage.getItem("kumudu_salu_contact"));
}

function setContactDetails(contact) {
  localStorage.setItem("kumudu_salu_contact", JSON.stringify(contact));
}

// Utility: Base64 File Reader
function readFileAsDataURL(file, callback) {
  const reader = new FileReader();
  reader.onload = function(e) {
    callback(e.target.result);
  };
  reader.readAsDataURL(file);
}

// Update UI Logos on page load
document.addEventListener("DOMContentLoaded", () => {
  const logoElements = document.querySelectorAll(".brand-logo");
  const currentLogo = getLogo();
  logoElements.forEach(img => {
      img.src = currentLogo;
  });
});
