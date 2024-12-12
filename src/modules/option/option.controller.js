const autoBind = require("auto-bind");
const { OptionMessage } = require("./option.message");
const HttpCodes = require("http-codes");
const optionService = require("./option.service");

class OptionController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = optionService;
  }

  async create(req, res, next) {
    try {
      const { title, key, guid, enum: list, type, category,required } = req.body;
      await this.#service.create({
        title,
        key,
        guid,
        enum: list,
        type,
        category,
        required
      });
      return res.status(HttpCodes.CREATED).json({
        message: OptionMessage.created,
      });
    } catch (error) {
      console.log(error);

      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const { title, key, guid, enum: list, type, category,required } = req.body;
      const {id} = req.params
      await this.#service.update(id,{
        title,
        key,
        guid,
        enum: list,
        type,
        category,
        required
      });
      return res.status(HttpCodes.CREATED).json({
        message: OptionMessage.Update,
      });
    } catch (error) {
      console.log(error);

      next(error);
    }
  }
  async find(req, res, next) {
    try {
      const options = await this.#service.find();
      res.json(options);
    } catch (error) {
      next(error);
    }
  }
  async findById(req, res, next) {
    try {
      const { id } = req.params;
      const option = await this.#service.findById(id);
      return res.json(option);
    } catch (error) {
      next(error);
    }
  }
  async removeById(req, res, next) {
    try {
      const { id } = req.params;
      const option = await this.#service.removeById(id);
      return res.json(option);
    } catch (error) {
      next(error);
    }
  }
  async findByCategoryId(req, res, next) {
    try {
        const { categoryId } = req.params;
        const options = await this.#service.findByCategoryId(categoryId);
        return res.json(options);
    } catch (error) {
      next(error);
    }
  }
  async findByCategorySlug(req, res, next) {
    try {
        const { slug } = req.params;
       await this.#service.findByCategoryslug(slug);
        return res.json({
            message:"delete sucessfully"
        });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new OptionController();
