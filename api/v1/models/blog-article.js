import mongoose from "mongoose";

export const BlogArticleSchemaFields = {
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String },
  articleBody: { type: String },
  publishedDate: { type: Date },
  featuredArticle: { type: Boolean, default: false },
  mainImage: { url: { type: String } },
  showroom: { type: String },
};

const BlogArticleSchema = new mongoose.Schema(BlogArticleSchemaFields, {
  timestamps: true,
});

const BlogArticle = mongoose.model("BlogArticle", BlogArticleSchema);

export default BlogArticle;
