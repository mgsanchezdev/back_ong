const modelContact = require('../../modelsConections/contactsModelConection');

const deleteContactById = (id) => {
  return modelContact.destroy({ where: { id } });
}

module.exports = deleteContactById;