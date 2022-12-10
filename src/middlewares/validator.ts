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
      year: Joi.date().greater("1-1-1974").required().messages({
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
      img: Joi.binary().encoding("base64").messages({
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

  moviesFilter(req: Request, res: Response, next: NextFunction) {
    const Schema = Joi.object({
      sort: Joi.string().min(4).max(255).required().messages({
        "string.base": `Sort debe ser un tipo de 'texto'!`,
        "string.empty": `Sort no puede ser un campo vacío!`,
        "string.min": `Sort debe tener una longitud de al menos {#limit} caracteres!`,
        "any.required": `Sort es un campo obligatorio!`,
      }),
      limit: Joi.number().required().messages({
        "string.base": `Limit debe ser un tipo de 'número'!`,
        "string.empty": `Limit no puede ser un campo vacío!`,
        "string.min": `Limit debe tener una longitud de al menos {#limit} caracteres!`,
        "any.required": `Limit es un campo obligatorio!`,
      }),
      page: Joi.number().required().messages({
        "string.base": `Page debe ser un tipo de 'número'!`,
        "string.empty": `Page no puede ser un campo vacío!`,
        "string.min": `Page debe tener una longitud de al menos {#limit} caracteres!`,
        "any.required": `Page es un campo obligatorio!`,
      }),
      search_by_name: Joi.string().min(4).max(255).required().messages({
        "string.base": `search_by_name De Portada debe ser un tipo de 'texto'!`,
        "string.empty": `search_by_name De Portada no puede ser un campo vacío!`,
        "string.min": `search_by_name De Portada debe tener una longitud de al menos {#limit} caracteres!`,
        "any.required": `search_by_name De Portada es un campo obligatorio!`,
      }),
    });

    const { error } = Schema.validate(req.body);
    if (error) return res.status(401).json({ error: error.details[0].message });
    next();
  }

  movieID(req: Request, res: Response, next: NextFunction) {
    const Schema = Joi.object({
      id: Joi.string().max(36).required().messages({
        "string.base": `ID debe ser un tipo de 'texto'!`,
        "string.empty": `ID no puede ser un campo vacío!`,
        "string.min": `ID debe tener una longitud de al menos {#limit} caracteres!`,
        "any.required": `ID es un campo obligatorio!`,
      }),
    });
    const { error } = Schema.validate(req.params);
    if (error) return res.status(401).json({ error: error.details[0].message });
    next();
  }
}

export default Validator;
