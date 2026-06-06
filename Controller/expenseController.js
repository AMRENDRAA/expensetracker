const Expenses = require('../Model/ExpenseModel');
const createexpense = async (req, res) => {

    try {

        const { Expenseamount, Expensedescription, Expensename } = req.body;

        const createuserexpense = await Expenses.create({
            Expenseamount,
            Expensedescription,
            Expensename,
            userId: req.user.id
        })


        res.status(201).json({
            status: "success",
            data: createuserexpense
        })




    } catch (err) {
        res.status(500).json({
            status: "Failed",
            err: err.message
        })
    }

}

const getallexpenses = async (req, res) => {

    try {
        console.log("USER:", req.user);

        const getuserexpense = await Expenses.find({ userId: req.user.id });


        res.status(200).json({
            status: "Success",
            data: getuserexpense

        })
    } catch (err) {

        res.status(400).json({
            status: "Failed",
            err: err.message
        })

    }
}
const deleteexpense = async (req, res) => {
    try {
        // console.log("working");

        // ⚠️ WARNING: Double check if your frontend sends this as req.params.id or req.body.id
        const id = req.params.id;

        // Fail early if no ID was provided at all to prevent Mongoose errors
        if (!id) {
            return res.status(400).json({
                status: "Failed",
                message: "No ID provided in request"
            });
        }

        const deletedDoc = await Expenses.findByIdAndDelete(id);

        if (!deletedDoc) {
            return res.status(404).json({ // 404 is more accurate for "Not Found"
                status: "Failed",
                message: "Expense not found"
            });
        }

        return res.status(200).json({
            status: "Success",
            message: "Expense deleted successfully"
        });

    } catch (err) {
        console.error("Delete error:", err); // Log the actual error to your terminal

        // Return here ensures the function stops completely on error
        return res.status(500).json({
            status: "Failed",
            err: err.message
        });
    }
};
const updateexpense = async (req, res) => {

    try {

        const id = req.params.id ? String(req.body.params).trim() : null;
        if (!id) {
            res.status(400).json({
                status: "failed",
                error: "No id provided in req"
            })
        }

        const updateuserexpense = await Expenses.findByIdAndUpdate(
            req.params.id, { $set: req.body }, { new: true, runValidators: true }
        )

        res.status(200).json({
            status: "success",
            data: updateuserexpense
        })


    } catch (err) {
        res.status(400).json({
            status: "Failed",
            err: err.message
        })
    }



}



module.exports = { createexpense, getallexpenses, deleteexpense, updateexpense };
