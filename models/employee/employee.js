const NOW=require('sequelize').now;
module.exports=(db,Sequelize) =>{
    let model=db.define('employee',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName:{
            type:Sequelize.STRING,
            allowNull:false
        },
        lastName:{
            type:Sequelize.STRING,
            allowNull:false
        },
        email:{
            type:Sequelize.STRING,
            allowNull:false
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false
        },
        roleId:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        isDeleted:{
            type:Sequelize.BOOLEAN,
            allowNull:false
        },
        companyId:{
            type:Sequelize.INTEGER,
            allowNull:false

        },
        departmentId:{
            type:Sequelize.INTEGER,
            allowNull:false
            

        }
        
    },{
        
            tableName:'employee',
            schema:'employee',
            underscored:true,
            timestamps:true
    });
    return model;
}