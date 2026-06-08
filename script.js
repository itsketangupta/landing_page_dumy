const sentence = `We prove, design,
implement, and market
your idea with absolute
transparency and
efficiency in it's core`;

const text = document.getElementById("text");

sentence.split("").forEach(char => {

    if (char === "\n") {
        text.appendChild(document.createElement("br"));
        return;
    }

    const span = document.createElement("span");

    span.classList.add("letter");

    if (char === " ") {
        span.innerHTML = "&nbsp;";
        span.classList.add("space");
    } else {
        span.textContent = char;
    }

    text.appendChild(span);

});

const video_box = document.querySelector(".video_box");
const hero = document.querySelector(".hero");
const letters = document.querySelectorAll(".letter");

function videoAnimation() {

    let scroll = window.scrollY;

    let scale = 0.8 + (scroll * 0.0013);

    scale = Math.min(scale, 1.45);

    let moveY = scroll * 0.22;

    video_box.style.transform =
        `translate(-50%, calc(-50% - ${moveY}px)) scale(${scale})`;

    hero.style.transform =
        `translate(-50%, calc(-50% - ${moveY}px))`;

}

function textReveal() {

    let scroll = window.scrollY;

    let trigger = 3800;

    if (scroll > trigger) {

        let progress = (scroll - trigger) / 5;

        letters.forEach((letter, index) => {

            if (progress > index) {
                letter.classList.add("show");
            } else {
                letter.classList.remove("show");
            }

        });

    }

}

window.addEventListener("scroll", () => {

    videoAnimation();

    textReveal();

});

const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");

window.addEventListener("scroll", () => {

    if (window.scrollY >= 4500) {
        card1.style.transform = "rotate(0deg)";
        card2.style.transform = "rotate(0deg)";
    } else {
        card1.style.transform = "rotate(-60deg)";
        card2.style.transform = "rotate(60deg)";
    }

});

window.addEventListener("scroll", () => {

    if (window.scrollY >= 4750) {
        card3.style.transform = "rotate(0deg) ";
        card4.style.transform = "rotate(0deg)";
    } else {
        card3.style.transform = "rotate(-60deg)";
        card4.style.transform = "rotate(60deg)";
    }

});

const card = document.querySelector(".card_main_rotate");

window.addEventListener("scroll", () => {
    const rect = card.getBoundingClientRect();

    const startPoint = window.innerHeight + 500;

    // jitna chhota multiplier, utni jaldi end
    const totalDistance = startPoint + rect.height * 0.5;

    let progress = (startPoint - rect.top) / totalDistance;

    progress = Math.max(0, Math.min(progress, 1));

    const rotation = -31 + 45 * progress;
    const translateY = 8 - 10 * progress;

    card.style.transform = `
        translate3d(0px, ${translateY}%, 0px)
        rotateZ(${rotation}deg)
    `;
});

const cards = document.querySelectorAll(
  ".main_new_cards .right .cards-section .card_main_rotate .card2 img, .main_new_cards .right .cards-section .card_main_rotate .card3 img, .main_new_cards .right .cards-section .card_main_rotate .card4 img"
);

window.addEventListener("scroll", () => {
  const viewportCenter = window.innerHeight / 2;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.top + rect.height / 2;

    const distance = Math.abs(viewportCenter - cardCenter);

    // jitna door hoga utna fade hoga
    let opacity = 1 - distance / 400;

    opacity = Math.max(0, Math.min(1, opacity));

    card.style.opacity = opacity;
  });
});