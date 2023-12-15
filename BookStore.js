// Create an array to store the books
let books = [
    [1, "Start with why", "Simon Sinek", 80.0, 13],
    [2, "But how do it know", "J. Clark Scott", 59.9, 22],
    [3, "Clean Code", "Robert Cecil Martin", 50.0, 5],
    [4, "Zero to One", "Peter Thiel", 45.0, 12],
    [5, "You don't know JS", "Kyle Simpson", 39.9, 9]
  ];
  
  // Function to add a new book
  function addBook(bookId, bookTitle, author, price, quantity) {
    books.push([bookId, bookTitle, author, price, quantity]);
    console.log(`Book '${bookTitle}' has been added.`);
  }
  
  // Function to update a book
  function updateBook(bookId, bookTitle, author, price, quantity) {
    for (let i = 0; i < books.length; i++) {
      if (books[i][0] === bookId) {
        books[i] = [bookId, bookTitle, author, price, quantity];
        console.log(`Book '${bookTitle}' has been updated.`);
        return;
      }
    }
    console.log(`Book with ID '${bookId}' does not exist.`);
  }
  
  // Function to delete a book
  function deleteBook(bookId) {
    for (let i = 0; i < books.length; i++) {
      if (books[i][0] === bookId) {
        const [bookTitle] = books[i].slice(1, 2);
        books.splice(i, 1);
        console.log(`Book '${bookTitle}' has been deleted.`);
        return;
      }
    }
    console.log(`Book with ID '${bookId}' does not exist.`);
  }
  
  // Function to search for a book
  function searchBook(criteria, value) {
    let foundBooks = [];
    for (let i = 0; i < books.length; i++) {
      if (books[i][criteria] === value) {
        foundBooks.push(books[i]);
      }
    }
    return foundBooks;
  }
  
  // Function to sell books and generate an invoice
  function sellBooks(bookTitle, quantity, availableBalance) {
    const foundBooks = searchBook(1, bookTitle);
    if (foundBooks.length === 0) {
      console.log(`Book '${bookTitle}' does not exist.`);
      return;
    }
  
    const [bookId, , , price, stock] = foundBooks[0];
    if (stock < quantity) {
      console.log(`Insufficient quantity for book '${bookTitle}'.`);
      return;
    }
  
    const totalPrice = price * quantity;
    if (totalPrice > availableBalance) {
      console.log("Insufficient balance.");
      return;
    }
  
    // Update the stock
    for (let i = 0; i < books.length; i++) {
      if (books[i][0] === bookId) {
        books[i][4] -= quantity;
        break;
      }
    }
  
    console.log(`Book '${bookTitle}' (${quantity}x) sold successfully. Total price: $${totalPrice}`);
  }

  // Function to display the books
function displayBooks() {
    console.log("Book Id\tTitle\t\t\tAuthor\t\t\tPrice\tQuantity");
    console.log("---------------------------------------------------------------");
    for (let i = 0; i < books.length; i++) {
      const [bookId, bookTitle, author, price, quantity] = books[i];
      console.log(`${bookId}\t${bookTitle}\t${author}\t\t${price}\t${quantity}`);
    }
    console.log("---------------------------------------------------------------");
  }
  
  // Test the functions
  addBook(6, "The Learn Startup", "Eric Ries", 35.0, 10);
  console.log(displayBooks());
  
  updateBook(3, "Clean Code: A Handbook of Agile", "Robert", 55.0, 8);
  console.log(displayBooks());
  
  deleteBook(2);
  console.log(displayBooks());
  
  const foundBooks = searchBook(3, "Clean Code: A Handbook of Agile");
  console.log(foundBooks);
  
  sellBooks("Clean Code: A Handbook of Agile", 3, 400.0);
  console.log(displayBooks());

  