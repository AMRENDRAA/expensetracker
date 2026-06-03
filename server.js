require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT;
app.use(express.json());
const connectDb = require('./Config/DbConnection')
connectDb();
app.get('/', (req, res) => res.send(`server is live `))
app.use("/api/expenses", require("./route/expenseRoute"));

app.listen(PORT, () => console.log(`Running on Port ${PORT}`))

