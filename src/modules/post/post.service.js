const autoBind = require("auto-bind");
const PostModel = require("./post.model");

class PostService {
  #model; 
  #optionModel;
  constructor() {
    autoBind(this);
    this.#model = PostModel;
    this.#optionModel = OptionModel;
  }

  async create(dto){
    return await this.#model.create(dto)
  }
}

module.exports = new PostService();
