import { Request, Response } from "express";
import * as yup from "yup";

interface Iprodutos {
  produto: string;
}
//validaçao dos dados
const BodyValidation: yup.ObjectSchema<Iprodutos> = yup.object().shape({
  produto: yup.string().required().min(3),
});

export const create = async (
  req: Request<{}, {}, Iprodutos>, 
  res: Response
) => {
  let validateData: Iprodutos | undefined = undefined;
  try {
    validateData = await BodyValidation.validate(req.body);
  } catch (erro) {
    const yupErro = erro as yup.ValidationError;
    return res.json({
      erros: {
        default: yupErro.message,
      },
    });
  }
  console.log(validateData);

  return res.send("create");
};
