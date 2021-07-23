const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const usersRouter = require("./routes/Users");
app.use("/users", usersRouter);
const needsRouter = require("./routes/Needs");
app.use("/needs", needsRouter);
const wantsRouter = require("./routes/Wants");
app.use("/wants", wantsRouter);


db.sequelize.sync().then(() => {
    app.listen(4990, () => {
        console.log("Server running on port 4990");
   });
});