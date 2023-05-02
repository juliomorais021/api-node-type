
import {StatusCodes} from 'http-status-codes';
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { Request, Response } from 'express';

interface Iprodutos {
  produto: string,
  descricao: string,

}
//validaçao dos dados
const BodyValidation: yup.ObjectSchema<Iprodutos> = yup.object().shape({
  produto: yup.string().required().min(3),
  descricao: yup.string().required().min(3),
});


export const createValidation  = validation(BodyValidation);


export const create = async (req: Request<{},{}, Iprodutos>,res: Response) =>{
  console.log(req.body)
  return res.send('create!')
}
  

