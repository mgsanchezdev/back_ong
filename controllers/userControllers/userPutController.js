const { MSG_UPDATE_USERS, ERROR_FOR_ID_USER } = require("../../const/const");

const Users = require("../../modelsConections/userModelConection");

const userPut = async (req, res) => {
  const { id } = req.params;
    
  try {
    await Users.update(req.body, { where: { id } });
    return res.status(200).json({ message: MSG_UPDATE_USERS });
  } catch {
    return res.status(404).json({ ERROR_FOR_ID_USER });
  }
};

module.exports = userPut;