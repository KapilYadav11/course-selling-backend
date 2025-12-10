const express = require("express");
const { courseRouter } = require("./routes/course");
const { userRouter } = require("./routes/user");

const app = express();

app.use("/course", courseRouter);
app.use("/user", userRouter);


app.listen(3000, () => {
    console.log("Server running on port 3000");
});
