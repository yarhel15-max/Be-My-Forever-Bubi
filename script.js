let messageIndex = 0;

const messages = [
  "Estas Segura? 🥺",
  "Piénsalo Bien 💔",
  "Me Romperías l Corazón Bubi😭",
  "Por Favorrrr 🥹",
  "Última Oportunidad😢"
];

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = `${currentSize * 1.4}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
