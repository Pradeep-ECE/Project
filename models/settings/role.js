module.exports=(db,Sequelize) =>{
    let model=db.define('role',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        isDeleted:{
            type:Sequelize.BOOLEAN,
            allowNull:false
        },
     },
    {
        
            tableName:'role',
            schema:'settings',
            underscored:true,
            timestamps:true
    });
    return model;
}