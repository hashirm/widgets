const tabs = document.querySelectorAll(".buttons .btn");
const tabsContainer = document.querySelector(".buttons");
const tabsContent = document.querySelectorAll(".icon-img");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    let btnTab = e.target.getAttribute("data-tab");
    console.log(btnTab);
    tabs.forEach((tab) => {
      tab.classList.remove("operationTab--active");
    });
    const clicked = e.target.classList.add("operationTab--active");
    if (clicked) return;
    tabsContent.forEach((element) =>
      element.classList.remove("operation-content--active")
    );
    const textCont = document.querySelector(`.content-0${btnTab}`);
    console.log(textCont.classList.add("operation-content--active"));
  });
});
