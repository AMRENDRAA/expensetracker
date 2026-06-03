const createexpense = (req, res) => {

    console.log("This is the controller");
    res.status(200).json({
        status: "success"
    })

}

module.exports = { createexpense };
