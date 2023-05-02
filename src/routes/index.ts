import { Router } from "express";
import {StatusCodes} from 'http-status-codes';
import './../shared/services/translate'
import {ProdutosControler} from './../controllers'
const router = Router();

router.get("/", (req, res) => {
  return res.send("olá dev");
});

router.post('/produtos',
ProdutosControler.createValidation,
ProdutosControler.create
);


export { router };
