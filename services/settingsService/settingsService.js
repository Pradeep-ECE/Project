const Department=require('../../models').department;
const Role=require('../../models').role;
const{to,TE,ReS,ReE} = require('../../global_functions.js');

/**
 * Original Author: PRADEEP M
 * Author: PRADEEP M
 * Created On: 11-05-2023
 * Modified on: 11-05-2023
 * Function: createDepartment
 * Method createDepartment which used to create the Department.
 * @param {*} body it hold the details about requested body
 * @returns if data fetched then return else run null or error message
 */

const createDepartment = async function(body){

    console.log("hello");
    
        let [err,Data] = await to(Department.bulkCreate(body));
        if(err) TE (err.message);
        if(Data) return Data;
    
}
/**
 * Original Author: PRADEEP M
 * Author: PRADEEP M
 * Created On: 11-05-2023
 * Modified on: 11-05-2023
 * Function: deleteRole
 * Method deleteRole which used to delete  the Role.
 * @param {*} body it hold the details about requested body
 * @returns if data fetched then return else run null or error message
 */
const deleteRole = async function(body){

    console.log("hello");
    
        let [err,Data] = await to(Role.update({
            isDeleted:true},{
                where:{
                    id:body
                }
            }
        ))
        if(err) 
        {   console.log("ERROR:::",err);
            TE (err.message);
        }
        if(Data) return Data;
    
}
/**
 * Original Author: PRADEEP M
 * Author: PRADEEP M
 * Created On: 11-05-2023
 * Modified on: 11-05-2023
 * Function: deleteRole
 * Method getRole which used to get the Role details from the Role model.
 * @param {*} body it hold the details about requested body
 * @returns if data fetched then return else run null or error message
 */
const getRole=async function(id)

{
    console.log(id);
    let[err,roleData]=await to(Role.findOne({
        where:{
            id:id
        }
    }));
    if(err) return TE(err.message);
    return roleData;
}
// /**
//  * Original Author: PRADEEP M
//  * Author: PRADEEP M
//  * Created On: 11-05-2023
//  * Modified on: 11-05-2023
//  * Function: getDepartment
//  * Method getDepartment which used to get the department data from department model.
//  * @param {*} body it hold the details about requested body
//  * @returns if data fetched then return else run null or error message
//  */

const getDepartment=async function(id)
{
    let[err,departmentData]=await to(Department.findOne({
        where:{
            id:id
        }
    }));
    if(err) return TE(err.message);
    return departmentData
}
module.exports={createDepartment,deleteRole,getRole,getDepartment};