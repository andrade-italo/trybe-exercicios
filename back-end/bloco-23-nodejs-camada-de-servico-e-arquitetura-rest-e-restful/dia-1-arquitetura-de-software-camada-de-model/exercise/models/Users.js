const connection = require("./connection");

  const [users] = await connection.execute(
    "SELECT id, first_name, middle_name, last_name FROM model_example.users;"
  );

const isValid = (firstName, lastName, email, password) => {
	if (!firstName || typeof firstName !== 'string') return false;
	if (!lastName || typeof lastName !== 'string') return false;
	if (!email && typeof email !== 'string') return false;
  if (!password || typeof password !== 'string' || password.length < 6) return false;

	return true;
};

const create = async (firstName, lastName, email, password) => connection.execute(
	'INSERT INTO model_example.users (first_name, last_name, email, password) VALUES (?,?,?, ?)',
	[firstName, lastName, email, password],
);

module.exports = {
  isValid,
  create
};
