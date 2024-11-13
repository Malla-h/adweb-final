import express from "express";
import Database from "better-sqlite3";
import bodyParser from "body-parser"; // para processar JSONs
import cors from "cors"; // enables Cross-Origin Resource Sharing, allowing the API to be accessed from different domains.

const app = express();
const port = 3000;

const db = new Database("app.db");

// Middleware
app.use(cors());
app.use(bodyParser.json());

// GET /posts
app.get("/posts", (req, res) => {
  const query = db.prepare(`SELECT posts.*, cursos.nome as curso_nome FROM posts
                             JOIN cursos ON posts.curso_id = cursos.id
                             ORDER BY posts.created_at DESC`);
  const posts = query.all();
  res.json(posts);
});

// POST /posts
app.post("/posts", (req, res) => {
  const { title, content, curso_id } = req.body;
  if (!title || !content || !curso_id) {
    return res
      .status(400)
      .json({ error: "topico, content, and curso_id are required" });
  }
  const insert = db.prepare(
    "INSERT INTO posts (title, content, curso_id) VALUES (?, ?, ?)"
  );
  const info = insert.run(title, content, curso_id);
  res.json({ id: info.lastInsertRowid });
});

// GET /cursos
app.get("/cursos", (req, res) => {
  const query = db.prepare("SELECT * FROM cursos");
  const cursos = query.all();
  res.json(cursos);
});

app.get("/", (req, res) => {
  res.send("SERVER RODANDO!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
