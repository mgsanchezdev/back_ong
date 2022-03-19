const deleteContactById = require('../../query/contactsQuery/deleteContact');

const { CONTACT_DELETED_SUCCESSFULLY } = require('../../const/const');

const deleteContact = async (req, res) => {
  const { id } = req.params;

  deleteContactById(id)
    .then(() => {
      res.json({message: CONTACT_DELETED_SUCCESSFULLY});
    })
    .catch (error => {
      res.status(404).json({ error })
    });
}

module.exports = deleteContact;