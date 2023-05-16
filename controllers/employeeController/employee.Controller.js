const Employee=require('../../models').employee;
const{to,ReE,ReS} = require('../../global_functions.js');
const router=require('express').Router();
const EmployeeService=require('../../services/employeeService/employeeService')
const validatorschema=require('../../middeleware/validate-schema');
const empValidator=require('../../routes/employee.Validator').empValidator;

/**
 * Original Author: PRADEEP M
 * Author: PRADEEP M
 * Created On: 11-05-2023
 * Modified on: 11-05-2023
 * Function: createEmployee
 * Method createEmployee which used to create all the employees.
 * @returns if data fetched then return else run null or error message
 */

const createEmployee = async function(req,res){
    let body = req && req.body ?  req && req.body : null;
    console.log("hello");
    if(body){
        let [err,Data] = await to(EmployeeService.createEmployeee(req.body));
        if(err) return ReE(res,err,422);
        if(Data) return ReS(res,Data,200);
    } 
}

/**
 * Original Author: PRADEEP M
 * Author: PRADEEP M
 * Created On: 11-05-2023
 * Modified on: 11-05-2023
 * Function: getEmployee
 * Method getEmployee which used to get all datas from the employee.
 * @returns if data fetched then return else run null or error message
 */

const getEmployee= async function(req,res)
{
    let id= req && req.params  ? req.params.id  :null;
    console.log("hello");
        let [err,Data] = await to(EmployeeService.getEmployeee(id));
        if(err) return ReE(res,err,422); 
        return ReS(res,Data,200);
}

/**
 * Original Author: PRADEEP M
 * Author: PRADEEP M
 * Created On: 11-05-2023
 * Modified on: 11-05-2023
 * Function: getEmployee
 * Method createEmp which used to create the employee.
 * @returns if data fetched then return else run null or error message
 */

const createEmp=async function(req,res){
    let body = req && req.body ?  req && req.body  : null;
    console.log("hello");
    if(body){
        let [err,Data] = await to(EmployeeService.createEmp(req));
        if(err) return ReE(res,err,422);
        return ReS(res,Data,200);
    } 
}




router.post('/',empValidator.createEmployeee,validatorschema.validate,createEmployee);
//router.get('/getEmployee',empValidator.params,validatorschema.validate,getEmployee);
router.post('/:companyId',createEmp);
router.get('/getEmployee/:id',getEmployee);

module.exports.router=router;

module.exports={createEmployee,createEmp,getEmployee};