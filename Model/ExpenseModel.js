const mongoose = require("mongoose");

const ExpenseUserModel = mongoose.Schema({

    Expensename: {
        type: String,
        required: [true, "Please provide the expense name "],
        minLength: [2, "Please enter atleast 2 char expensename"]
    },
    Expensedescription: {
        type: String,
        required: [true, "Please provide Expensedetails"],
        minLength: [5, "Min length is 5 char"]
    },
    Expenseamount: {
        type: Number,
        required: [true, "Please provide the amount"],
        validator: {
            validator: function (value) {
                return value > 0;
            },
            message: 'Value should be greater than 1'
        }
    },
    Category: {
        type: String,
        enum: [
            "Groceries",
            "Leisure",
            "Electronics",
            "Utilities",
            "Clothing",
            "Health",
            "Others"

        ],
        default: "Others"
    },
    // Owner of the expense
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }



}, {
    timestamp: [true]
})

module.exports = mongoose.model("ExpenseUserModel", ExpenseUserModel)
