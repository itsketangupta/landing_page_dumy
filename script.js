const video_box = document.querySelector(".video_box");

window.addEventListener("scroll", () => {

    let scroll = window.scrollY;
    let scale = 0.8 + (scroll * 0.0013);
    scale = Math.min(scale, 1.45);
    let moveY = scroll * 0.22;
    video_box.style.transform = `translate(-50%, calc(-50% - ${moveY}px)) scale(${scale})`;

});