import express from "express";
import cors from "cors";
import housesRoutes from "./routes/houses.routes.js";

const app = express();

const corsOptions = {
  origin: '*',  // This should be the Frontend ip
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/houses", housesRoutes);

app.use((req, res, next) => {
  console.log('Hit route:', req.originalUrl);
  next();
});

export default app;