const { Schema, Types, model } = require("mongoose");

const PostSchema = new Schema({
  title: { type: String, required: true },
  userId: { type: Types.ObjectId, required: true },

  content: { type: String, required: true },
  category: { type: Types.ObjectId, ref: "Category", required: true },
  images: { type: [String], required: false, default: [] },
  options:{type:Object,default:{}}
},{
  timestamps:true
});
const PostModel = model("post",PostSchema)
module.exports = PostModel
