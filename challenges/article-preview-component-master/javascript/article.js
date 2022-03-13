const popUp = document.querySelector('.pop_up');
const shareButton = document.querySelector('.share_button');
const userInfo = document.querySelector('.user_info');
const svg = document.querySelector('.svg-grey');
console.log('Hi');
const popUpDisplay = () => {
  popUp.classList.toggle('show');
  shareButton.classList.toggle('active');
  svg.classList.toggle('svg-white');
};
shareButton.addEventListener('click', popUpDisplay);
shareButton.addEventListener('mouseover', () => {
  svg.classList.add('svg-hover');
});
shareButton.addEventListener('mouseout', () => {
  svg.classList.remove('svg-hover');
});