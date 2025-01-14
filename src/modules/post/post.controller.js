const autoBind = require("auto-bind");
const postService = require("./post.service");
const { Types } = require("mongoose");
const { PostMessage } = require("./post.message");
const utf8 = require("utf8");
class PostController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = postService;
  }

  async create(req, res, next) {
    try {
      const userId = req.user._id
  
      const images = req?.files?.map((image) => image?.path?.slice(7));

      const { title_post: title, des_post: content, category } = req.body;
      delete req.body["title_post"];
      delete req.body["des_post"];
      delete req.body["category"];
      const options = req.body;
      for (let key in options) {
        let value = options[key];
        delete options[key];
        key = utf8.decode(key);
        options[key] = value;
      }

      await this.#service.create({
        userId,
        title,
        content,
        category: new Types.ObjectId(category),
        images,
        options,
      });
      return res.status(200).json({
        message: PostMessage.created,
      });
    } catch (error) {
      console.log(error);

      next(error);
    }
  }
  async findMyPosts(req, res, next) {
    try {
      const userId = req.user._id
      const { search } = req.query; 
      const posts = await this.#service.find(userId, search); 
      return res.json(posts);

    } catch (error) {
      next(error);
    }
  }
  async remove(req, res, next) {
    try {
      const {id} = req.params
      await this.#service.remove(id)
      return res.json({message:"پست مورد نظر با موفقیت حذف گردید"});

    } catch (error) {
      next(error);
    }
  }

  async showPost(req, res, next) {
    try {
      const {id} = req.params
     const post =  await this.#service.showPost(id)
      return res.json(post);

    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PostController();
