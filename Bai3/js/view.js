const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');

one.addEventListener('click', () => {
  document.querySelector('.content1').style.color = '#626262';
  document.querySelector('.content2').style.color = '#ccc';
  document.querySelector('.content3').style.color = '#ccc';
  one.classList.add('active');
  two.classList.remove('active');
  three.classList.remove('active');
});
two.addEventListener('click', () => {
  document.querySelector('.content1').style.color = '#ccc';
  document.querySelector('.content2').style.color = '#626262';
  document.querySelector('.content3').style.color = '#ccc';
  two.classList.add('active');
  one.classList.remove('active');
  three.classList.remove('active');
});
three.addEventListener('click', () => {
  document.querySelector('.content2').style.color = '#ccc';
  document.querySelector('.content1').style.color = '#ccc';
  document.querySelector('.content3').style.color = '#626262';
  three.classList.add('active');
  one.classList.remove('active');
  two.classList.remove('active');
});
