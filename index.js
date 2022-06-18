window.addEventListener('DOMContentLoaded', (event) => {
  console.log("DOM loaded and parsed");

  document.querySelectorAll(".collapsible").forEach(function(current) {

    let toggler = document.createElement("div");
    toggler.className = "toggler";
    current.appendChild(toggler);

    toggler.addEventListener("click", function(e) {
      current.classList.toggle("open");
    }, false);
  });

  const randomTitle = Math.floor(Math.random() * 2);
  console.log(randomTitle);
  const changingTitle = document.getElementById("changing-title");
  const titles = ["Musician", "Programmer"];
  changingTitle.textContent = titles[randomTitle];
});
