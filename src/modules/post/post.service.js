const autoBind = require("auto-bind");
const PostModel = require("./post.model");
const OptionModel = require("../option/option.model");
const { isValidObjectId } = require("mongoose");

class PostService {
  #model;
  #optionModel;
  constructor() {
    autoBind(this);
    this.#model = PostModel;
    this.#optionModel = OptionModel;
  }

  async create(dto) {
    return await this.#model.create(dto);
  }

  async find(userId) {
    if (userId && isValidObjectId(userId)) {
      return await this.#model.find({ userId });
    }
  }
}

module.exports = new PostService();
