import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { ObjectSchema, ValidationError } from "yup";

type Tvalidation = (schema: ObjectSchema<any>) => RequestHandler;

export const validation: Tvalidation = (schema) => async (req, res, next) => {
  
    try {
     await schema.validate(req.body, {abortEarly: false});
     return next();
    } catch (erro) {
      const yupErro = erro as ValidationError;
      const validationErros: Record<string,string> = {};
      yupErro.inner.forEach(erro =>{
         if (!erro.path) return;
         validationErros[erro.path] = erro.message;
      })
  
      return res.status(StatusCodes.BAD_REQUEST).json({
        erros: {
          default:  validationErros,
        },
      });
    }
   

  };

