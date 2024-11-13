# Trabalho 2 para Programação Avançada para WEB
## Objetivo
O trabalho implementa uma parte específica de um projeto maior voltado para e-learning. O escopo escolhido abrange a funcionalidade onde um usuário pode criar postagens visíveis para todos os demais.
O usuário tem a opção de escolher a qual curso a postagem será relacionada. As opções de cursos são pré-determinadas pelos cursos que estão no banco de dados.

## Como rodar localmente
Na pasta ./backend rode:
```
npm run start
```

Em outro terminal na pasta ./frontend rode:
```
npm run dev
```

Siga o link que aparece no terminal.

## Tecnologias usadas
- Vue
- Node.js
- Express
- SQLite3
- Better-SQLite
	- Biblioteca que facilita integração com SQLite3
## Comandos que foram usados na criação do projeto
###  Setup do frontend com Vue:
```bash
npm create vue@latest
cd frontend
npm install
npm run format
npm run dev
npm install axios # Axios para conectar com o backend
```

### Setup do backend com Express
```bash
npm init -y
npm install better-sqlite3
npm init
npm install express
npm install cors body-parser
```
