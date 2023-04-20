import mongoose from "mongoose";



const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  blog: {
    type: String,
    required: true,
  },
  flare: {
    type: String,
    required: true,
  },
  category:{
    type: String,
    required: true,
  },
  author:{
    name: {
      type: String,
      required: true,
    },
    profileImg:{
      type: String,
      required: true,
    }
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Blog = mongoose.model("Blog", schema);
