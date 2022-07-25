const client = require('../config/client');

const messageDataMapper = {

	async getAll() {
	  const query = {
		text: 'SELECT * FROM message',
		values: [],
	  };
	  const result = await client.query(query);
	  return result.rows;
	},

	async getById(id) {
	  const query = {
		text: 'SELECT * FROM message WHERE id = $1',
		values: [id],
	  };
	  const result = await client.query(query);
	  return result.rows[0];
	},

	async createMessage(data) {
        const query = {
            text: `INSERT INTO message
            (
                nom,
                email,
                tel,
                message
                )
                VALUES ($1, $2, $3, $4)
                RETURNING *`,
            values: [
                data.nom,
                data.email,
                data.tel,
                data.message,
            ],
        };
        const result = await client.query(query);
        return result.rows[0];
    },
  };

  module.exports = messageDataMapper;

