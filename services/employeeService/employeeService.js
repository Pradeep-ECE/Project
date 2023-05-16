const employee=require('../../models').employee;
const ConsolidatedService=require('../consolidateService')
const{to,TE} = require('../../global_functions.js');
const db=require('../../models/index')
const SettingService=require('../settingsService/settingsService');
/**
 * Original Author: PRADEEP M
 * Author: PRADEEP M
 * Created On: 11-05-2023
 * Modified on: 11-05-2023
 * Function: createEmployeee
 * Method createEmployeee which used to create all the employees.
 * @param {*} body it hold the details about requested body
 * @returns if data fetched then return else run null or error message
 */

const createEmployeee=async function(body){
    
    let [err,employeeData] = await to(employee.create(body));
    if(err) 
    {console.log(err); 
        return TE(err.message);
    }
    return employeeData;
}

/**
 * Original Author: PRADEEP M
 * Author: PRADEEP M
 * Created On: 11-05-2023
 * Modified on: 11-05-2023
 * Function: getEmployeee
 * Method getEmployeee which used to get all the employees.
 * @param {*} query it hold the details about requested params
 * @returns if data fetched then return else run null or error message
 */

const getEmployeee=async function(query){
        let err1,roleData,err2,departmentData;
        let [err,employeeData] = await to(employee.findOne({
            where:{
                id:query
            }
        }));
        if(err)  return TE(err.message);
        
        // if(employeeData) return employeeData;
        [err1,roleData]=await to(ConsolidatedService.callOtherSchema(SettingService,'getRole',employeeData.roleId));
        if(err1) TE (err1.message);
        [err2,departmentData]=await to(ConsolidatedService.callOtherSchema(SettingService,'getDepartment',employeeData.departmentId));
        //if(err2) TE (err2.message);
       // if(roleData && departmentData )
       // {
        employeeData.dataValues['Role']=roleData;
        employeeData.dataValues['Department']=departmentData;
      //  }
        return employeeData;
    }

const createEmp=async function(data){
    let body=data.body
    let params=data.params
    let [err,employeeData] = await to(employee.create({
    id:body.id,
    firstName:body.firstName,
    lastName:body.lastName,
    email:body.email,
    password:body.password,
    roleId:body.roleId,
    isDeleted:body.isDeleted,
    companyId:params.companyId
    }));
    if(err) 
    {console.log(err); 
        return TE(err.message);
    }
    return employeeData;
}

// const getEmployeee= async function(empId){
//     let[err,empData]=await to(db.sequelize.query('SELECT * FROM employee.employee where id= :id',{
//         replacements:{
//             id:empId
//         },type:models.sequelize.QueryTypes.SELECT
//     }));
//     if(err) TE (err.message)
//     if(empData) return empData;
//}
module.exports={getEmployeee,createEmployeee,createEmp};
