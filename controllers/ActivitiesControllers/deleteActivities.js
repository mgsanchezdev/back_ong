const deleteActivityById = require('../../query/activitiesQueries/deleteActivityQuery');

const { ACTIVITY_DELETED_SUCCESSFULLY } = require('../../const/const');

const deleteActivity = async (req, res) => {
  const { id } = req.params;

  deleteActivityById(id)
    .then(() => {
      res.json({message: ACTIVITY_DELETED_SUCCESSFULLY});
    })
    .catch (error => {
      res.status(404).json({ error })
    });
}

module.exports = deleteActivity;