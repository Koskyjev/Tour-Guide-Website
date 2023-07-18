document.querySelector(".navbar-toggle").addEventListener("click", function () {
    let links = document.querySelectorAll(".navbar-link");
    console.log("menu toggled")
    for (let i = 0; i < links.length; i++) {
      links[i].classList.toggle("active");
    }
  });