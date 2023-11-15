import express from "express";
import doctorRoutes from "./routes/doctorRoute.js";
import mapRoutes from "./routes/mapRouter.js";

const app = express();

app.use(express.json());

app.use("/doctorAPI", doctorRoutes);
app.use("/mapAPI", mapRoutes);
app.get("/ping", (req, res) => res.send("pong"));
app.get('/', function (req, res) {
  return res.send("Hello World!");
});
app.post("/test", (req, res) => {
  console.log(req.body);
  res.json({ OK: "OK" });
});

export default app;
