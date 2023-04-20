import express from "express";
import { deleteBlog, getAllBlog, getBlogByFilter, getBlogById, getBlogBySearch, newBlog, updateBlog } from "../controllers/blog.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.post("/new", isAuthenticated, newBlog);

router.get("/getAll", getAllBlog);

router.get("/search/:key", getBlogBySearch);

router.get("/filter/:key", getBlogByFilter);

router
  .route("/:id")
  .get(getBlogById)
  .put(isAuthenticated, updateBlog)
  .delete(isAuthenticated, deleteBlog);

export default router;
