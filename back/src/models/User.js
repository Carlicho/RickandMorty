const { DataTypes, INTEGER, ENUM } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      //  id:{
      //     type: DataTypes.INTEGER,
      //     allowNull:false,
      //     primaryKey: true,
      //  },

      //id no es necesario porque se asigna automaticamente por eso no hace falta definirlo
      
       email:{
          type: DataTypes.STRING,
          allowNull:false,
},
      password:{
               type: DataTypes.STRING,
               allowNull: false,

            }
         },),

   { timestamps: false };



};
