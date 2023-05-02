import express from "express";
import { router } from "./routes";
import 'dotenv/config'



const app = express();
app.use(express.json()); // identificar os dados json
app.use(router);


app.listen(process.env.PORT || 3000 , () => {
  console.log(`back-end rodando na porta: ${process.env.PORT}`);
});
