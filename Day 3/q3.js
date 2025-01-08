const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 127.43,
    },
    {
        title: "The Grapes of Wrath",
        author: "John Steinbeck",
        price: 414.23,
    },
    {
        title: "Nineteen Eighty-Four",
        author: "George Orwell",
        price: 513.34,
    },
    {
        title: "Ulysses",
        author: "James Joyce",
        price: 2002.73,
    }
];

const filterBooks = function(books) {
    console.log("\nBooks priced > 500");
    return books.filter((book) => {
        return book.price > 500; 
    });
};

const sortBooks = (books) => {
    console.log("\nBooks sorted alphabetically");
    sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title)); 
    return sortedBooks
};

const bookTitles = (books) => {
    console.log("\nAll book titles");
    let allTitles = []
    books.map((book) => {
        allTitles.push(book.title);
    });
    return allTitles;
}

console.log(filterBooks(books));
console.log(sortBooks(books));
console.log(bookTitles(books));