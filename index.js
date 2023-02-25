// Twoj kod tutaj

const btn = document.querySelector("#startTimeout");
btn.addEventListener("click", function () {
  setTimeout(() => {
    const h1 = document.createElement("h1");
    h1.innerText = "Boom!";
    document.body.appendChild(h1);
  }, 5 * 1000);
});
