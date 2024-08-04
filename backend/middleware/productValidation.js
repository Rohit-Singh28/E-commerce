const productSchemaJoi = require('../schemaValidation')
const customError = require('../utils/customError')

const productValidation = (req,res,next) => {
    const {error} = productSchemaJoi.validate(req.body.data);
    if(error){
        throw new customError(400,error);
    }else{
        next();
    }
}

module.exports = productValidation;