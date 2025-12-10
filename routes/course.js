const { Router } = require("express");
const courseRouter = Router();

courseRouter.get("/purchase", (req, res) => {
    return res.json({
        message: "Course purchase endpoint"
    });
});

courseRouter.get("/preview", (req, res) => {
    return res.json({
        message: "All courses endpoint"
    });
});

module.exports = { courseRouter };
