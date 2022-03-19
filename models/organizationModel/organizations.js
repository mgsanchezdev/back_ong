module.exports = (Sequelize, type) => {
  return Sequelize.define("organization", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: type.STRING,
    logo: type.STRING,
    phone: type.BIGINT,
    adress: type.STRING,
    welcomeText: type.STRING,
  });
};
