const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const usersRouter = require("./routes/Users");
app.use("/users", usersRouter);
const needlistRouter = require("./routes/Need_list");
app.use("/need_list", needlistRouter);
const wantlistRouter = require("./routes/Want_list");
app.use("/want_list", wantlistRouter);
const saveamountRouter = require("./routes/Saving_amount");
app.use("/savings", saveamountRouter);
const budgetRouter = require("./routes/Budget");
app.use("/budget", budgetRouter);
const needamRouter = require("./routes/Need_amount");
app.use("/needs", needamRouter);
const wantamRouter = require("./routes/Want_amount");
app.use("/wants", wantamRouter);

db.sequelize.sync().then(() => {
    app.listen(4990, () => {
        console.log("Server running on port 4990");
   });
});