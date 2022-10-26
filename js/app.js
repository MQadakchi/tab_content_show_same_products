const items = document.querySelectorAll(".item");
const products = document.querySelectorAll(".product");
let itemCount = 0;

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    items.forEach((item) => item.classList.remove("active"));
    e.currentTarget.classList.add("active");
    const category = e.currentTarget.dataset.category;
    products.forEach((prd) => {
      prd.style.transform = "scale(0)";
      prd.style.transition = "transform 0.3s linear";
      setTimeout(() => (prd.style.display = "none"), 350);

      if (prd.dataset.product === category || category === "all") {
        prd.style.transform = "scale(1)";
        prd.style.transition = "transform 0.3s linear";
        setTimeout(() => (prd.style.display = "flex"), 350);
      }
    });
  });
});
