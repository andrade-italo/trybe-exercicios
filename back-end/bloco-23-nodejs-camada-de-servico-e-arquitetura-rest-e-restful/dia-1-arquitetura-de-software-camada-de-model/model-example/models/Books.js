const connection = require("./connection");
const Author = require('./Author');


// Converte o nome dos campos de snake_case para camelCase
const serialize = (booksData) => ({
  id,
  title,
  authorId: booksData.author_id,
});

// Busca todas as pessoas autoras do banco.
const getAll = async () => {
  const [books, _fields] = await connection.execute(
    "SELECT * FROM model_example.books;"
  );
  return books.map(serialize);
};

const getByAuthorId = async (authorId) => {
  const [books, _fields] = await connection.execute(
    `SELECT * FROM model_example.books WHERE author_id=${authorId};`
  );
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const findBooksById = async (bookId) => {
  const [books, _fields] = await connection.execute(
    `SELECT * FROM model_example.books WHERE id=?;`, [bookId]
  );
  if (books.length === 0) return null;

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const isValid = async (title, authorId) => {
  return (
    title && title.length > 3 && authorId && (await Author.findById(authorId))
  );
};

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
  );

module.exports = {
  getAll,
  getByAuthorId,
  findBooksById,
  isValid,
  create
};
