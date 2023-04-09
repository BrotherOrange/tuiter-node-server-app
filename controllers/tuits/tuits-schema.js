import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    _id: Number,
    text: String,
    like: Number,
    liked: Boolean,
    name: String,
    userName: String,
    icon: String,
    preview: String,
    previewTitle: String,
    previewText: String,
    previewLink: String,
    topic: String,
    time: String,
    comment: String,
    retuit: String,
    retweetId: Number,
    dislike: Number,
    disliked: Boolean,
    category: Number
  },
  { collection: "tuits" }
);
export default schema;
