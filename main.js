const primaryNav = document.querySelector(".primary-navigation"); 
const navToggle = document.querySelector(".mobile-nav-toggle");
const mobileOverlay = document.querySelector("body"); 

navToggle.onclick = () =>{
    const visibility = primaryNav.getAttribute("data-visible");
    if(visibility === "false"){
        primaryNav.setAttribute("data-visible", true); 
        navToggle.setAttribute("aria-expanded", true);
        mobileOverlay.setAttribute("class", "mobile-overlay"); 
    }else if(visibility === "true"){
        primaryNav.setAttribute("data-visible", false); 
        navToggle.setAttribute("aria-expanded", false);
        mobileOverlay.removeAttribute("class", "mobile-overlay");  
    }
}