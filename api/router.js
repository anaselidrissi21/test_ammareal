const express = require('express');
const path = require("path");

const messageController = require ('../api/controller/messageController')

const router = express.Router();



router.get("/", (req, res) => {
	const filePath = path.join(__dirname, '../index.html');
	res.sendFile(filePath);
  });

router.get("/message", messageController.getAll);
router.get("/message/:id", messageController.getById);
router.post("/message", messageController.createMessage);


module.exports = router;
