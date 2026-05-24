const box = document.querySelector(".box");

window.addEventListener("scroll", () => {

    let scroll = window.scrollY;

    // zoom
    let scale = 0.8 + (scroll * 0.0013);

    scale = Math.min(scale, 1.45);

    // div keeps moving upward
    let moveY = scroll * 0.22;

    box.style.transform =
    `translate(-50%, calc(-50% - ${moveY}px)) scale(${scale})`;

});