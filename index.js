mobileToggle = document.querySelector(".hamburger-menu");
primaryNav = document.querySelector(".primary-navigation");

mobileToggle.addEventListener("click", () => {
    if (mobileToggle.dataset.close == "false") {
        mobileToggle.dataset.close = "true";
        primaryNav.dataset.toggled = "true";
    } else {
        mobileToggle.dataset.close = "false";
        primaryNav.dataset.toggled = "false";
    }
    
})