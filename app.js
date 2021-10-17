//document.getElementsByClassName

// const itmes = document.getElementsByClassName('collection-item');
// console.log(itmes);
// console.log(itmes[0]);
// itmes[0].style.color = 'red';
// itmes[3].textContent = 'Hello';

// const listItem = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItem);


//document.getElementByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// //Conver HTML Collection into array

// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//  console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

//document.querySelectorsAll

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
  item.textContent = `${index}: Hello`;

});

const liOdd = document.querySelectorAll('li:nth-child(odd');
const liEven = document.querySelectorAll('li:nth-child(even')

liOdd.forEach(function(li, index){
  li.style.background = "#ccc";
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);