const express = require("express");

const server = express();

const sequelize = require("./db/db");

const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// server.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   next();
// });
server.set("trust proxy", 1);

server.use(express.json());
server.use(cors({ origin: "http://localhost:5173", credentials: true }));
server.use(
  session({
    proxy: true,
    secret: "milpitaspokerclub",
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({ db: sequelize }),
    cookie: {
      sameSite: "lax",
      secure: false,
      httpOnly: false,
    },
  })
);

const authRouter = require("./routes/auth");

server.use("/auth", authRouter);

sequelize
  .sync()
  .then(() => {
    server.listen(3000);
  })
  .catch((err) => console.log(err));
