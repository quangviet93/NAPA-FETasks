// const one = document.querySelector('#one');
// const two = document.querySelector('#two');
// const three = document.querySelector('#three');

// one.addEventListener('click', () => {
//   document.querySelector('.content1').style.color = '#626262';
//   document.querySelector('.content2').style.color = '#ccc';
//   document.querySelector('.content3').style.color = '#ccc';
//   one.classList.add('active');
//   two.classList.remove('active');
//   three.classList.remove('active');
// });
// two.addEventListener('click', () => {
//   document.querySelector('.content1').style.color = '#ccc';
//   document.querySelector('.content2').style.color = '#626262';
//   document.querySelector('.content3').style.color = '#ccc';
//   two.classList.add('active');
//   one.classList.remove('active');
//   three.classList.remove('active');
// });
// three.addEventListener('click', () => {
//   document.querySelector('.content2').style.color = '#ccc';
//   document.querySelector('.content1').style.color = '#ccc';
//   document.querySelector('.content3').style.color = '#626262';
//   three.classList.add('active');
//   one.classList.remove('active');
//   two.classList.remove('active');
// });


var myArray = [
  'Java',
  'Php',
  'dart',
  'ruby',
  'python',
]

const students = [
  {
    id: 1,
    name: 'nghia',
    age: 26,
    subjects: [
      'toán',
      'lý',
      'hóa'
    ],
    type: 'GIỎI',
    tien: 10000,
  },
  {
    id: 2,
    name: 'thanh',
    age: 22,
    subjects: [
      'toán',
      'lý',
    ],
    type: 'GIỎI',
    tien: 10000,
  },
  {
    id: 3,
    name: 'huy',
    age: 26,
    subjects: [
      'toán',
      'lý',
    ],
    type: 'KHÁ',
    tien: 5000,
  },
  {
    id: 4,
    name: 'viet',
    age: 28,
    subjects: [
      'toán',
      'lý',
      'hóa'
    ],
    type: 'KHÁ',
    tien: 5000,
  }
]

const number = [8, 44, 67, 23, 6, 1, 6];


const minNumber = number.reduce((output, item) => {

  if () {

  }

}, []);
console.log(minNumber)
