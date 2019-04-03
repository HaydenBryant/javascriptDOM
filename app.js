const bookList = document.querySelector('#book-list');

console.log('bookList next sibling is', bookList.nextSibling);
console.log('bookList next element sibling is', bookList.nextElementSibling);

console.log('bookList previous sibling is', bookList.previousSibling);
console.log('bookList previous element sibling is', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/> too cool';