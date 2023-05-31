const books = require("./bookData");

const bookRoot = {
  book: ({ id }) => {
    const book = books.find((b) => b.id === id);
    return book;
  },
};

module.exports = bookRoot;
