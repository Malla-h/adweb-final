import Database from "better-sqlite3";
const db = new Database("app.db");

const querry = `
    CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
     CREATE TABLE IF NOT EXISTS cursos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        ano INTEGER NOT NULL,
        UNIQUE(nome, ano)
      );
`;
db.exec(querry);

const data = [
  { nome: "Estrutura de Dados", ano: 2023 },
  { nome: "Desenvolvimento Mobile", ano: 2024 },
  { nome: "Desenvolvimento Web", ano: 2024 },
  { nome: "Engenharia de Software", ano: 2024 },
  { nome: "Banco de Dados", ano: 2024 },
  { nome: "Inteligencia Artificial", ano: 2024 },
  { nome: "Inteligencia Artificial", ano: 2025 },
];

// Para inserir os valores na database temos que preparar um statement
const insertData = db.prepare("INSERT INTO cursos (nome, ano) VALUES (?, ?)");

// E usamos o statement para inserir os valores
data.forEach((curso) => {
  insertData.run(curso.nome, curso.ano);
});

db.close();
