const { Router } = require('express');
const userRouter = Router();

userRouter.post("/signup", (req, res) => {
    return res.json({
        message: "Signup endpoint"
    });
});

userRouter.post("/signin", (req, res) => {
    return res.json({
        message: "Signin endpoint"
    });
});

userRouter.get("/purchases", (req, res) => {
    return res.json({
        message: "Purchases endpoint"
    });
});

module.exports = {
    userRouter
}
