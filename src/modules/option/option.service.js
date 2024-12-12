const autoBind = require("auto-bind");
const OptionModel = require("./option.model");
const createHttpError = require("http-errors");
const { OptionMessage } = require("./option.message");
const { default: slugify } = require("slugify");
const CategotyModel = require("../category/category.model");

class OptionService {
  #model;
  #categoryModel;
  constructor() {
    autoBind(this);
    this.#model = OptionModel;
    this.#categoryModel = CategotyModel;
  }
  async create(OptionDto) {
    console.log(OptionDto);

    const category = await this.checkExistById(OptionDto.category);

    OptionDto.category = category._id;
    OptionDto.key = slugify(OptionDto.key, {
      trim: true,
      replacement: "_",
      lower: true,
    });
    await this.alreadyExistByCategoryAndKey(OptionDto.key, category._id);

    if (OptionDto?.enum && typeof OptionDto.enum === "string") {
      OptionDto.enum = OptionDto.enum.split(",");
    } else if (Array.isArray(OptionDto.enum)) {
      OptionDto.enum = [];
    }
    const option = await this.#model.create(OptionDto);
  }
  async find() {
    const options = await this.#model
      .find({}, { __v: 0 }, { sort: { _id: -1 } })
      .populate([{ path: "category", select: { name: 1, slug: 1 } }]);
    return options;
  }
  async findById(id) {
    return await this.checkExistById(id);
  }
  async findByCategoryId(category) {
    return await this.#model.find({ category },{__v:0}).populate([{ path: "category", select: { name: 1, slug: 1 } }]);
  }

  async checkExistById(id) {
    const category = await this.#categoryModel.findById(id);
    if (!category) throw new createHttpError.NotFound(OptionMessage.NotFound);
    return category;
  }

  async alreadyExistByCategoryAndKey(key, category) {
    const isExist = await this.#model.findOne({ category, key });
    if (isExist) throw new createHttpError.Conflict(OptionMessage.AlreadyExist);
    return null;
  }
}

module.exports = new OptionService();
