module.exports = (sequelize, type) => {
  return sequelize.define('categories',{
    id:{
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: type.STRING,
    },
    description: {
      type: type.STRING
    }
  },
  {
    paranoid:true
  }); 
}
