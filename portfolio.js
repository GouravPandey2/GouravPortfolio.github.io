function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += " responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}


// ------------dark mode------------
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

});


// ---------- Typing Effect---------- 

var typingEffect = new Typed(".typedText", {
    strings:["Designer", "Coder", "Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,

})

// ------------scroll animation-------------- 
const sr = scrollReveal({
    origin:"top",
    distance:"80px",
    duration:"2000",
    reset:"true",
});

sr.reveal(".featured-name", {delay:100});
sr.reveal(".text-inf", {delay:200});
sr.reveal(".text-btn", {delay:200});
sr.reveal(".social-icons", {delay:200});
sr.reveal(".featured-image", {delay:200});


sr.reveal(".project-box", { interval:200});

sr.reveal(".top-header",{});

const srLeft = scrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset:true,
})

srLeft.reveal(".about-info",{delay:100});
srLeft.reveal(".contact-info",{delay:100});


const srRight = scrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset:true,
})

srRight.reveal(".skill",{delay:100});
srRight.reveal(".skill-box",{delay:100});


/*------------- active link --------------- */

const sections = document.querySelectorAll(".section[id]");
function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
    }
}
