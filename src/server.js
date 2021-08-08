const express = require("express");

const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const userRouter = require("./routers/users");

app.use("/users", userRouter);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
