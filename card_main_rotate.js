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