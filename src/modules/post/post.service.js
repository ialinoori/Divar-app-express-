const autoBind = require("auto-bind");
const PostModel = require("./post.model");
const OptionModel = require("../option/option.model");
const { isValidObjectId } = require("mongoose");
const createHttpError = require("http-errors");

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

  async find(userId, search) {
    let query = { userId };

    if (search) {
      const regex = new RegExp(search, 'i'); 
      query = {
        ...query,
        $or: [
          { title: { $regex: regex } }, 
          { content: { $regex: regex } },
        ],
      };
    }

    if (userId && isValidObjectId(userId)) {
      return await this.#model.find(query); 
    }

    return []; 
  }
  async remove(postId) {
    if (!postId || !isValidObjectId(postId)) {
      throw new createHttpError.BadRequest("post id not valid");
    }
    const post = await this.#model.findById(postId);
    if (!post) throw new createHttpError.NotFound("post not found");
    await this.#model.deleteOne({ _id: postId });
  }

  async showPost(postId) {
    if (!postId || !isValidObjectId(postId)) {
      throw new createHttpError.BadRequest("post id not valid");
    }
    const post = await this.#model.findById(postId);
    if (!post) throw new createHttpError.NotFound("post not found");
    return post
    
  }
}

module.exports = new PostService();
