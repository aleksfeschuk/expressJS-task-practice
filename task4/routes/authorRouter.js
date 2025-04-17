const { Router } = require("express");
const { getAuthorById } = require('../controllers/authorController');

const authorController = Router();

authorRouter.get("/:authorId", getAuthorById);

