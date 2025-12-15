const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const { courseRouter } = require("./routes/course");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/course", courseRouter);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);


app.listen(3000, () => {
    console.log("Server is  running on port 3000");
});
