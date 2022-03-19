module.exports = (sequelize, type) => {
  return sequelize.define('testimonial', {
    id:{
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: type.STRING,
    },
    image: {
      type: type.STRING
    },
    content: {
      type: type.STRING
    }
  },
  {
    paranoid: true,
  })
}  