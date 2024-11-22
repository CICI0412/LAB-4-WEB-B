// JSON data (usually, you would fetch this from an external file)
const booksData = {
  "books": [
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "publicationYear": 1925,
      "genres": ["Fiction", "Classics"]
    },
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "publicationYear": 1960,
      "genres": ["Fiction", "Coming-of-Age"]
    }
  ]
};

// Display the JSON data in the <pre> tag (formatted)
document.getElementById("output").textContent = JSON.stringify(booksData, null, 2);
