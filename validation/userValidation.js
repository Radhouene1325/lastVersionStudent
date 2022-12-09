const joi = require('@hapi/joi')


const advertiserValidation = (data) => {

    const schema = joi.object({
  
      email: joi.string().email().required(),
      password: joi.string().min(6).alphanum().required(),
    
  
      name: joi.string().regex(/^[A-Za-z]*$/).required()
      .messages({ "string.pattern.base": "entrez un  nom valid" }),
  
      lastName: joi.string().regex(/^[A-Za-z]*$/).required()
      .messages({ "string.pattern.base": "entrez un prenom valid" }),
      Street: joi.string().required(),
      Country: joi.string().required(),
      Genre: joi.string(),
      
      PostalCode: joi.number().required(),
      PhoneNumber: joi
        .string()
        .length(8).pattern(/^[0-9]+$/)
        .required()
        .messages({ "string.pattern.base": "entrez un valid numero de téléphpne de 8 characters" }),
  
    });
  
    return schema.validate(data, { abortEarly: false });
  
  };
const serviceProviderValidation = (data) => {

    const schema = joi.object({
  
      email: joi.string().email().required(),
      password: joi.string().min(6).alphanum().required(),
      NumCarteEtudiant: joi.number().required(),
    
  
      name: joi.string().regex(/^[A-Za-z]*$/).required()
      .messages({ "string.pattern.base": "entrez un  nom valid" }),
  
      lastName: joi.string().regex(/^[A-Za-z]*$/).required()
      .messages({ "string.pattern.base": "entrez un prenom valid" }),
      Street: joi.string().required(),
      Country: joi.string().required(),
      Genre: joi.string(),
      
      PostalCode: joi.number().required(),
      PhoneNumber: joi
        .string()
        .length(8).pattern(/^[0-9]+$/)
        .required()
        .messages({ "string.pattern.base": "entrez un valid numero de téléphpne de 8 characters" }),
  
    });
  
    return schema.validate(data, { abortEarly: false });
  
  };
  module.exports = {
 advertiserValidation,
 serviceProviderValidation
}