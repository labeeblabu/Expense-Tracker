const Sequelize=require('sequelize')

const sequelize=new Sequelize(`exp`,`root`,`965636@Leb`,{
    dialect:`mysql`,
    host:`localhost`
    
})

module.exports=sequelize;