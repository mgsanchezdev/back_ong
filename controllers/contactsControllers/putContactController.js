const { MSG_UPDATE_CONTACT, ERROR_FOR_ID_CONTACT } = require("../../const/const");

const Contact = require("../../modelsConections/contactsModelConection");

const contactPut = async (req, res) => {
  const { id } = req.params;

  try {
    await Contact.update(req.body, { where: { id } });
    return res.status(200).json({ message: MSG_UPDATE_CONTACT });
  } catch {
    return res.status(404).json({ ERROR_FOR_ID_CONTACT });
  }
};

module.exports = contactPut;