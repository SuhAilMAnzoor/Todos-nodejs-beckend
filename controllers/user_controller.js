const UserServices = require("../services/user_services");  // import UserServices

exports.register = async (req,res,next) => {
    try {
        if (!req.body || !req.body.email || !req.body.password) {
            return res.status(400).json({ status: false, error: "Email and password are required" });
        }

        const { email, password } = req.body;

        const successRes = await UserServices.registerUser(email,password);

        res.json({status: true, success:"User Registered Successfully"});
    } catch (error) {
      
    res.status(400).json({ status: false, error: error.message });
}
}


// Note for Folder Structure MVC
// here, we handle the request and respone from the frontend

// Note >> How our code execute The Code Follow
// router -> controller -> service