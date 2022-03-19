const { getToken } = require('../../helpers/userToken/userGetToken');
const { encrypt } = require('../../helpers/encrypt');
const User = require('../../modelsConections/userModelConection');

const { ERROR, ROLE_ID_USER, ROLE_ID_ADMIN } = require('../../const/const');

exports.register = async (req, res) => {
  let { body } = req;

  try {
    body.password = await encrypt(body.password);

    // logic for set admin role in the first user register.
    const containUSer = await User.findOne();

    if (containUSer){
      body.roleId = ROLE_ID_USER;
    } else {
      body.roleId = ROLE_ID_ADMIN;
    }

    let user = await User.create(body);
    
    res.status(200).json({ token: getToken(user) });
  } catch (error) {
    res.status(500).json({error: ERROR});
  }
}
