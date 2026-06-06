const mongoose = require("mongoose");
const ExpenseUserModel = require("./Model/ExpenseModel");
require("dotenv").config();

async function removeCategoryField() {
    try {

        console.log("Connecting...");
        await mongoose.connect(process.env.CONNECTION_STRING);

        console.log("Connected");

        const result = await ExpenseUserModel.updateMany(
            {},
            { $unset: { category: "" } }
        );

        console.log("Full result:", result);

        console.log("Modified:", result.modifiedCount);

        process.exit(0);

    } catch (err) {
        console.log("ERROR:", err.message);
        process.exit(1);
    }
}

removeCategoryField();