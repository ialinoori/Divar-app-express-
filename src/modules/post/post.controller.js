const autoBind = require("auto-bind");
const postService = require("./post.service");
const { Types } = require("mongoose");
const { PostMessage } = require("./post.message");

class PostController {
  #service;
  constructor() {  
    autoBind(this);
    this.#service = postService;
  }

  async create(req, res, next) {
    try {
      console.log(req.body);
      const { title_post: title, des_post:content, category } = req.body;
      delete req.body["title_post"];
      delete req.body["des_post"];
      delete req.body["category"];
      const options = req.body

      await this.#service.create({
        title,
        content,
        category: new Types.ObjectId(category),
        images: [],
        options
      });
      return res.status(200).json({
        message:PostMessage.created
      })
    } catch (error) {
      console.log(error);

      next(error);
    }
  }
  async find(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
  async remove(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PostController();
