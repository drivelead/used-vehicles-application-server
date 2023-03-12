import BlogArticle from "../models/blog-article.js";
import Showroom from "../models/showroom.js";

export const addBlogArticle = async (req, res) => {
  const data = req.body.data;
  console.log(data);

  try {
    const created = await BlogArticle.create(data);

    if (!created) {
      return res.status(500).json({ message: "Addition Unsuccessfull" });
    }

    if (created.showroom.id) {
      // showroom added to vehicle
      // now add vehicle to specific showroom
      try {
        let showroomFound = await Showroom.findById(created.showroom.id);

        if (showroomFound) {
          showroomFound.blogArticles = [
            ...showroomFound.blogArticles,
            { id: created._id },
          ];

          showroomFound = await showroomFound.save({ new: true });

          console.log("showroomFound updated", showroomFound);
        }
      } catch (err) {
        console.log(
          "controllers/used-vehicle - addUsedVehicle - updating showroom: ",
          err.message
        );
      }
    }

    res.status(201).json({ result: created });
  } catch (err) {
    // catch and sent error to client
    res.status(500).json({ message: err.message });
  }
};
