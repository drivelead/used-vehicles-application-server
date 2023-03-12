import express from "express";
import { addBlogArticle } from "../controllers/blog-article.js";

const blogArticleRouter = express.Router();

blogArticleRouter.route("/").post(addBlogArticle);

export default blogArticleRouter;
