const messageDataMapper = require('../models/messageDatamapper');



const messageController = {
	async getAll(_, res) {
	  const message = await messageDataMapper.getAll();
	  if (message.length === 0) {
		return res.status(404).json({ error: 'No message found' });
	  }
	  return res.status(200).json(message);
	},

	async getById(req, res) {
	  const message = await messageDataMapper.getById(req.params.id);
	  if (!message) {
		return res.status(404).json({ error: 'No message found' });
	  }
	  return res.status(200).json(message);
	},

	async createMessage(req, res) {
        const message = await messageDataMapper.createMessage(req.body);
        return res.status(200).json(message);
    },
  };



module.exports = messageController;
