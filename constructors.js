const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];

// //Question1
// //Create a function called getAvailableBooks that returns an array of all available
// //books.
//  function getAvailableBooks(){
//      for(let i in books, i<= books.length, i++){
//          if(books.isAvailable === true){
//             return books.title
//          }
//      }
//  }
//  console.log(getAvailableBooks());


// //Question 2
// //Create a function getBooksByAuthor that takes an author's name as an argument and
// //returns an array of all books by that author.
// function getBooksByAuthor(author) {
//     let booksByAuthor = []

//     for (let i = 0; i <= books.length; i++) {
//         if (author === books.author) {
//             booksByAuthor.push(books.author[i])            
//         }   
        
//     }  
//     return booksByAuthor  
// }
// console.log(getBooksByAuthor('Charles Dickens'));


//Question 3
//Create a function addNewBook that takes a book object as an argument and adds it
//to the library, ensuring that the new book has all required properties (title, author,
 //   publicationYear, and isAvailable).
 function addNewBook(newBook){

     books.push(newBook)

 }
 addNewBook({ title: 'It starts with us', author: 'Rowlings', publicationYear: 2012,
 isAvailable: true })
 
 console.log(books);
 


//Question4
//4. Create a function checkoutBook that takes a book title as an argument and changes
//the book's isAvailable property to false. If the book is not found in the library, the
//function should return a message indicating that the book is not available.
function checkoutBook(bookTitle) {
    for (let i = 0; i < books.length; i++) {


    if (books.title == bookTitle) {
        books.isAvailable = false
        
    }
}
        console.log("Book is not available");

    

    
}
checkoutBook("The Catcher")
// checkoutBook("The Catcher in the Rye")


//5. Create a function returnBook that takes a book title as an argument and changes the
//book's isAvailable property to true. If the book is not found in the library, the function
//should return a message indicating that the book does not belong to the library.
function returnBook(titleOfBook){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (titleOfBook == books.title) {
            books.isAvailable = true
            
        }
        
    }
}