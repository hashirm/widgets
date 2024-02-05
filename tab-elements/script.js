const tabs = document.querySelectorAll(".buttons .btn");
const tabsContainer = document.querySelector(".buttons");
const tabsContent = document.querySelectorAll(".icon-img");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    tabs.forEach((tab) => {
      tab.classList.remove("operationTab--active");
    });
    const clicked = e.target.classList.add("operationTab--active");
    if(clicked.classList.)
    
  });
});
