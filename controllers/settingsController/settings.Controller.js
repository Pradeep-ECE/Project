const Department=require('../../models').department;
const Role=require('../../models').role;
const{to,ReE,ReS} = require('../../global_functions.js');
const router=require('express').Router();
const SettingService=require('../../services/settingsService/settingsService')
const Validatorschema=require('../../middeleware/validate-schema');
const EmpValidator=require('../../routes/employee.Validator').empValidator;


/**
 * Original Author: PRADEEP M
 * Author: PRADEEP M
 * Created On: 11-05-2023
 * Modified on: 11-05-2023
 * Function: createDepartment
 * Method createDepartment which used to create  the Department.
 * @returns if data fetched then return else run null or error message
 */

const createDepartment = async function(req,res){
   
    console.log("hello");
   
        let [err,Data] = await to(SettingService.createDepartment(req.body));
        if(err) return ReE(res,err,422);
        if(Data) return ReS(res,Data,200);
    
}

/**
 * Original Author: PRADEEP M
 * Author: PRADEEP M
 * Created On: 11-05-2023
 * Modified on: 11-05-2023
 * Function: createRole
 * Method createRole which used to create  the Role.
 * @returns if data fetched then return else run null or error message
 */

const createRole = async function(req,res){
    let body = req && req.body ?  req && req.body : null;
    console.log("hello");
    if(body)
    {
        let [err,Data] = await to(Role.create(body));
        if(err) return ReE(res,err,422);
        if(Data) return ReS(res,Data,200);
    } 
}

/**
 * Original Author: PRADEEP M
 * Author: PRADEEP M
 * Created On: 11-05-2023
 * Modified on: 11-05-2023
 * Function: deleteRole
 * Method deleteRole which used to delete  the Role.
 */

const deleteRole = async function(req,res){
    let body = req && req.body ?  req && req.body : null;
    console.log("hello");
    if(body){
        let [err,Data] = await to(SettingService.deleteRole(body.id));
        if(err) return ReE(res,err,422);
        if(Data) return ReS(res,Data,200);
    } 
}

/**
 * Original Author: PRADEEP M
 * Author: PRADEEP M
 * Created On: 12-05-2023
 * Modified on: 12-05-2023
 * Function: getRoleData
 * Method get which used to get the all data from the Role.
 * @returns if data fetched then return else run null or error message
 */
// const getRoleData= async function(req,res){
//     let body = req && req.body ?  req && req.body : null;
//     console.log("hello");
//     if(body){
//     let[err,roleData]=await to(settingService.getRoleData(req.body))
//     if(err) return ReE(res,err,422);
//     if(roleData) return ReS(res,roleData,200);
//     }

// }

router.post('/',EmpValidator.createDepartment,Validatorschema.validate,createDepartment);
router.post('/createRole',createRole);
router.post('/deleteRole',deleteRole);
// router.get('/getRoleData',getRoleData);



module.exports.router=router;
module.exports={createDepartment,createRole,deleteRole}