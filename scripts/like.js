const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if ([...heart.classList].includes('is-liked')) {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Unlike'),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Like'),
      500
    );
  }
}

const popup = document.getElementById('popup-id');
const openBtn = document.querySelector('.button__popup-open');
const closeBtn = document.querySelector('.button__popup-close');

if (openBtn && popup) {
  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.showModal();
  });
}

if (closeBtn && popup) {
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.close();
  });
}