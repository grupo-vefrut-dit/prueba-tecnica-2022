import Joi from "@hapi/joi";
import { Request, Response, NextFunction } from "express";

class Validator {
  login(req: Request, res: Response, next: NextFunction) {
    const Schema = Joi.object({
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email()
        .required()
        .messages({
          "string.base": `Correo debe ser un tipo de 'texto'!`,
          "string.empty": `Correo no puede ser un campo vacío!`,
          "string.min": `Correo debe tener una longitud de al menos {#limit} caracteres!`,
          "any.required": `Correo es un campo obligatorio!`,
        }),
      password: Joi.string().min(6).max(1024).required().messages({
        "string.base": `Contraseña debe ser un tipo de 'texto'!`,
        "string.empty": `Contraseña no puede ser un campo vacío!`,
        "string.min": `Contraseña debe tener una longitud de al menos {#limit} caracteres!`,
        "string.pattern.base": `Contraseña no acepta caracteres especiales!`,
        "any.required": `Contraseña es un campo obligatorio!`,
      }),
    });

    const { error } = Schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
  }

  register(req: Request, res: Response, next: NextFunction) {
    const Schema = Joi.object({
      firstName: Joi.string().min(4).max(255).required().messages({
        "string.base": `Nombres debe ser un tipo de 'texto'!`,
        "string.empty": `Nombres no puede ser un campo vacío!`,
        "string.min": `Nombres debe tener una longitud de al menos {#limit} caracteres!`,
        "any.required": `Nombres es un campo obligatorio!`,
      }),
      lastName: Joi.string().min(4).max(255).required().messages({
        "string.base": `Apellido debe ser un tipo de 'texto'!`,
        "string.empty": `Apellido no puede ser un campo vacío!`,
        "string.min": `Apellido debe tener una longitud de al menos {#limit} caracteres!`,
        "any.required": `Apellido es un campo obligatorio!`,
      }),
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ minDomainSegments: 2 })
        .messages({
          "string.base": `Correo debe ser un tipo de 'texto'!`,
          "string.empty": `Correo no puede ser un campo vacío!`,
          "string.min": `Correo debe tener una longitud de al menos {#limit} caracteres!`,
          "any.required": `Correo es un campo obligatorio!`,
        }),
      password: Joi.string()
        .min(6)
        .max(1024)
        .required()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .messages({
          "string.base": `Contraseña debe ser un tipo de 'texto'!`,
          "string.empty": `Contraseña no puede ser un campo vacío!`,
          "string.min": `Contraseña debe tener una longitud de al menos {#limit} caracteres!`,
          "string.pattern.base": `Contraseña no acepta caracteres especiales!`,
          "any.required": `Contraseña es un campo obligatorio!`,
        }),
      repassword: Joi.string().required().valid(Joi.ref("password")).messages({
        "string.base": `Contraseña debe ser un tipo de 'texto'!`,
        "string.empty": `Contraseña no puede ser un campo vacío!`,
        "string.min": `Contraseña debe tener una longitud de al menos {#limit} caracteres!`,
        "string.pattern.base": `Contraseña no acepta caracteres especiales!`,
        "any.required": `Contraseña es un campo obligatorio!`,
      }),
    });

    const { error } = Schema.validate(req.body);
    if (error) return res.status(401).json({ error: error.details[0].message });
    next();
  }

  movies(req: Request, res: Response, next: NextFunction) {
    const Schema = Joi.object({
      name: Joi.string().min(4).max(255).required().messages({
        "string.base": `Nombre debe ser un tipo de 'texto'!`,
        "string.empty": `Nombre no puede ser un campo vacío!`,
        "string.min": `Nombre debe tener una longitud de al menos {#limit} caracteres!`,
        "any.required": `Nombre es un campo obligatorio!`,
      }),
      year: Joi.date().greater('1-1-1974').required().messages({
        "string.base": `Año debe ser un tipo de 'texto'!`,
        "string.empty": `Año no puede ser un campo vacío!`,
        "string.min": `Año debe tener una longitud de al menos {#limit} caracteres!`,
        "any.required": `Año es un campo obligatorio!`,
      }),
      description: Joi.string().min(6).max(255).required().messages({
        "string.base": `Descripción debe ser un tipo de 'texto'!`,
        "string.empty": `Descripción no puede ser un campo vacío!`,
        "string.min": `Descripción debe tener una longitud de al menos {#limit} caracteres!`,
        "any.required": `Descripción es un campo obligatorio!`,
      }),
      category: Joi.string().min(6).max(255).required().messages({
        "string.base": `Categoria debe ser un tipo de 'texto'!`,
        "string.empty": `Categoria no puede ser un campo vacío!`,
        "string.min": `Categoria debe tener una longitud de al menos {#limit} caracteres!`,
        "any.required": `Categoria es un campo obligatorio!`,
      }),
      img: Joi.binary().encoding('base64').messages({
        "string.base": `imagen De Portada debe ser un tipo de 'texto'!`,
        "string.empty": `imagen De Portada no puede ser un campo vacío!`,
        "string.min": `imagen De Portada debe tener una longitud de al menos {#limit} caracteres!`,
        "any.required": `imagen De Portada es un campo obligatorio!`,
      }),
    });

    const { error } = Schema.validate(req.body);
    if (error) return res.status(401).json({ error: error.details[0].message });
    next();
  }
}

export default Validator;
