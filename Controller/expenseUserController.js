const User = require('../Model/ExpenseUserModel')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");



//CLIENT SENDS REGISTRATION REQUEST
//BACKEND VALIDATES THE INPUT FIELDS 
//CHECK IF THE USER ALREADY EXISTSS 
// USER STORED IN DB
// SUCCESS 

const registerUser = async (req, res) => {

    try {

        //COLLECT USERNAME ,PASSWORD ,EMAIL

        const { email, username, password } = req.body;
        if (!username || !email || !password) {
            res.status(400).json({
                status: "Failed",
                message: "Missing username email or password "
            })
        }

        const useravailable = await User.findOne({ email });

        if (useravailable) {
            res.status(400).json({
                status: "Failed",
                message: "User already exists "
            })
        }

        // store the password in the hashed way 

        const hashedpassword = await bcrypt.hash(password, 10);
        console.log(hashedpassword);
        const newuser = await User.create({
            username,
            email,
            password: hashedpassword
        })

        if (newuser) {
            res.status(201).json({
                _id: newuser.id,
                email: newuser.email
            })
        } else {
            res.status(400).json({
                status: "Failed",
                error: "Data is invalid"
            })
        }

    } catch (err) {
        res.status(500).json({
            status: "Failed",
            err: err.message
        })
    }
}



//CLIENT SEND THE LOGIN REQUEST
// BACKEND VALIDATE CREDENTIALS 
// BACKEND WILL FIND THE USER 
//BACKEND WILL BCRYPT PASSWORD COMPARE 
// JWT ACCESS TOKEN GENERATED 
// TOKEN SENT TO CLIENT 

const loginuser = async (req, res) => {
    try {

        //CLIENT WILL SEND THE DATA 
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({
                status: "Failed",
                message: "Enter email or password"
            })
        }

        // find the user in the db
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {

            const accesstoken = jwt.sign({

                // jwt sign uses three parameter
                // payload 
                // access_token_Secret
                // exprires in

                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id
                }

            }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" })

            res.status(200).json({
                status: "Success",
                token: accesstoken
            })
        }
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            err: err.message
        })
    }
}


module.exports = {
    registerUser,
    loginuser
}

