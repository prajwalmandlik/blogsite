import express from "express";
import { deleteBlog, getAllBlog, getBlogByFilter, getBlogById, getBlogBySearch, getBlogByUserId, newBlog, updateBlog } from "../controllers/blog.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.post("/new",isAuthenticated,  newBlog);

router.get("/getAll", getAllBlog);

router.get("/search/:key", getBlogBySearch);

router.get("/filter/:key", getBlogByFilter);

router.get("/getByUserId/:id", getBlogByUserId);

router
  .route("/:id")
  .get(getBlogById)
  .put(isAuthenticated, updateBlog)
  .delete(isAuthenticated, deleteBlog);

export default router;
