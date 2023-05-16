const{check,body,param,query}=require('express-validator');

const empValidator={
    createEmployeee:[
        body('firstName').isString().notEmpty().withMessage('firstName Must be a String'),
        body('lastName').isString().withMessage('firstName Must be a String'),
        body('email').exists({checkFalsy:true}).withMessage('email should not be falsy values'),
        
    
        
    ],
    createDepartment:[
        body('*.name').exists({checkFalsy:true}).withMessage("email should be string")
    ],
    params:[
        query('companyId').isNumeric().withMessage("ID is Invalid")
    ]
}
module.exports = {empValidator};