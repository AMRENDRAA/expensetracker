const mongoose = require('mongoose');
const expenseUserschema = mongoose.Schema({

    username: {
        type: String,
        required: [true, "Please enter the username "],
        minlength: [3, 'Username must be 3 characters ']
    },
    password: {

        type: String,
        required: [true, "Password is required"],
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
            "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number."

        ]

    },
    email: {
        type: String,
        required: [true, "Please enter the email"],
        unique: true,
        lowercase: true,
        trim: true,
        //remove the accidental white spaces from the begining and ending 

        match: [

            /^\S+@\S+\.\S+$/,
            "Please enter a valid email address containing an @ symbol and a domain (e.g., user@example.com)"

        ]
    }

}, {
    timestamps: true,


})

module.exports = mongoose.model("ExpenseUser", expenseUserschema);
