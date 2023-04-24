import ErrorHandler from "../middlewares/error.js";
import { Blog } from "../models/blog.js";

export const newBlog = async (req, res, next) => {
  try {

    await Blog.create({
      ...req.body,
    });

    res.status(201).json({
      success: true,
      message: "blog added Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllBlog = async (req, res, next) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    next(error);
  }
};

export const getBlogById = async (req, res, next) => {
  try {
    const blog = await Blog.find({_id: req.params.id});

    if (!blog) return next(new ErrorHandler("blog not found", 404));

    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    next(error);
  }
};

export const getBlogByUserId = async (req, res, next) => {
  try {
    const  authorId  = req.params.id;

    const blogs = await Blog.find({ 'author.authorId': authorId })

    if (!blogs) return next(new ErrorHandler("blog not found", 404));

    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    next(error);
  }
};

export const getBlogBySearch = async (req, res, next) => {
  try {
    const blog = await Blog.find(
      {
        "$or": [
          { title: { $regex: req.params.key, $options: "i" } },
          { blog: { $regex: req.params.key, $options: "i" } },
          { category: { $regex: req.params.key, $options: "i" } },
        ]
      }
    ).select("_id title description flare link");

    if (!blog) return next(new ErrorHandler("Blog not found", 404));

    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    next(error);
  }
};

export const getBlogByFilter = async (req, res, next) => {

  try {
    const blog = await Blog.find(
      {
        "$or": [
          { category: { $regex: req.params.key } }
        ]
      }
    ).select("_id title description flare link");
    if (!blog) return next(new ErrorHandler("Scheme not found", 404));

    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    next(error);
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const blogs = await Blog.findById(req.params.id);

    if (!blogs) return next(new ErrorHandler("Blog not found", 404));

    //code to update 
    await blogs.updateOne({
      $set: {
        ...req.body,
      }
    })

    await blogs.save();

    res.status(200).json({
      success: true,
      message: "Blog Updated!",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) return next(new ErrorHandler("Blog not found", 404));
    await blog.deleteOne();

    res.status(200).json({
      message: "Blog Deleted!",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
