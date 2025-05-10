const router = require("express").Router();
const db = require("./db");

// display all books from table
router.get("/", async (req, res) => {
  const books = await db.query("SELECT * FROM books");
  return res.send(books[0]);
});

// insert new book
router.post("/", async (req, res) => {
  const data = req.body;
  //   const { title, pages } = req.body;
  await db.query("INSERT INTO books (title, pages) VALUES(?,?)", [
    data.title,
    data.pages,
  ]);
  return res.send("Book created successfully!");
});

// delete a book by using id
router.delete("/:bookId", async (req, res) => {
  //   res.send("You're about to delete id " + req.params.bookId);
  await db.query("DELETE FROM books WHERE id = ?", [req.params.bookId]);
  return res.send("Book removed !");
});

// get single book by id
router.get("/:id", async (req, res) => {
  const book = await db.query("SELECT * FROM books WHERE id = ?", [
    req.params.id,
  ]);
  return res.send(book[0][0]);
});

// update operations
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { title, pages } = req.body;
  await db.query("UPDATE books SET title = ?, pages = ? WHERE id = ?", [
    title,
    pages,
    id,
  ]);
  return res.send("Book updated successfully");
});

module.exports = router;
