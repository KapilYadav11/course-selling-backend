const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");

adminRouter.post("/signup", async(req, res) => {
     try {
    let { email, password, firstName, lastName } = req.body;
        if(!email || !password || !firstName || !lastName){
            return res.status(401).json({
                message:"All field are required"
            })
        };

        let hashPassword = await bcrypt.hash(password, 10);

        let newUser = await adminModel.create({
            email,
            password:hashPassword,
            firstName,
            lastName
        })
        if(!newUser){
            return res.status(401).json({
                message:"Something went wrong",
                error
            })
        };

        let token = jwt.sign({id:newUser_id}, process.env.JWT_SECRET_KEY_ADMIN,{
            expiresIn:"1h"
        });

        res.cookie("token", token,{
            httpOnly:true,
        });

        return res.status(201).json({
            message:"User registerd successfully!",
            user: newUser,
        })

        
    } catch (error) {
        return res.status(500).json({
            message:"Internal server Error in the user registerd login",
            error
        });
    }
});    


adminRouter.post("/signin", async(req, res) => {
    try {
        let{ email, password } = req.body;
        if( !email || !password){
            return res.status(404).json({
                message:"All field are required"
            })
        };

        let user = await adminModel.findOne({
            email,
        });
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        };

        let comparePassword =  await bcrypt.compare(password, user.password);
        if(!comparePassword){
            return res.status(403).json({
                message:"Invalid credentials"
            })
        };

        let token =  jwt.sign({id:user._id}, process.env.JWT_SECRET_KEY_ADMIN,{
            expiresIn:"1h"
        });
        res.cookie("token", token, {
            httpOnly:true,
        })

        return res.status(200).json({
            message:"User login successfully!",
            UserModel
        })
        
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error",
            error
    });
  }
});

adminRouter.post("/", (req, res) => {
    return res.json({
        message: "Create Course endpoint"
    });
});
adminRouter.put("/", (req, res)=>{
    return res.json({
        message:"Admin put the courses"
    })
});

adminRouter.get("/bulk", (req, res)=>{
    return res.json({
        message:"Amin can get all the courses "
    })
})


module.exports = {
    adminRouter
}