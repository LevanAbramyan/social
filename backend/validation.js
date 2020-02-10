const Joi = require('@hapi/joi')

const regVal = (data) =>{
    const schema = Joi.object({
        first_name: Joi.string(),
        last_name: Joi.string(),
        email: Joi.string().email(),
        projects: Joi.string(),
        currentProject: Joi.string(),
        about: Joi.string(),
        password: Joi.string().min(6),
        avatar: Joi.string(),
      })
      return schema.validate(data)
}
const logVal = (data) =>{
    const schema = Joi.object({
        email: Joi.string().email(),
        password: Joi.string().min(6),
       
      })
      return schema.validate(data)
}


module.exports.regVal = regVal;
module.exports.logVal = logVal;