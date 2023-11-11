import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "njohnhub",
  database: "Books",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books.new_table";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q =
    "INSERT INTO books.new_table (`title`,`desc`,`coverPic`,`price`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.coverPic,
    req.body.price,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return console.log(err);
    return res.json("book created");
  });
});

app.delete("/delete/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books.new_table where id = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book Deleted");
  });
});

app.put("/update/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE books.new_table SET `title`=?, `desc`=?, `coverPic`=?, `price` =? WHERE id = ?";
    const values = [
      req.body.title,
      req.body.desc,
      req.body.coverPic,
      req.body.price,
    ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book Updated");
  });
});

app.listen(8000, () => {
  console.log("server running");
});
