const video_box = document.querySelector(".video_box");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    let scale = 0.8 + (scroll * 0.0013);
    scale = Math.min(scale, 1.45);
    let moveY = scroll * 0.22;
    video_box.style.transform =
        `translate(-50%, calc(-50% - ${moveY}px)) scale(${scale})`;
    hero.style.transform =
        `translate(-50%, calc(-50% - ${moveY}px))`;
});

// const box = document.querySelector(".");
// window.addEventListener("scroll", () => {
//     let scroll = window.scrollY;
//     box.style.opacity = scroll / 500;
// });

const txt = document.querySelector(".links");
const Book_A_call = document.querySelector(".Book_A_call");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        txt.style.display = "none";
        Book_A_call.style.display = "block";
    } else {
        Book_A_call.style.display = "none";
        txt.style.display = "flex";
    }

});