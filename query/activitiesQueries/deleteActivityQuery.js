const modelActivities = require('../../modelsConections/activityModelConection');

const deleteActivityById = (id) => {
  return modelActivities.destroy({ where: { id } });
}

module.exports = deleteActivityById;