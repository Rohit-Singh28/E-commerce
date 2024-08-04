const Joi = require('joi');

const productSchema = Joi.object({
    productName: Joi.string().required(),
    
    brandName: Joi.string().required(),
    
    price:Joi.number().min(0).required(),
    
    sellingPrice:Joi.number().min(0).required(),

    description: Joi.string().required(),
    
    category: Joi.string()
        .valid("airpodes", "camera", "earphones", "mobiles", "Mouse",
            "printers", "processor", "refrigerator", "speakers", "trimmers", "televisions", "watches")
        .required(),
    
    productImage:[  
        Joi.string().required()
    ]
})

module.exports = productSchema;