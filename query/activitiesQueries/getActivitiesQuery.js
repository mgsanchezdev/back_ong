const modelActivities = require('../../modelsConections/activityModelConection');

const queryGetActivities = async () => modelActivities.findAll({
    attributes: ['id', 'name', 'image','content']
});

module.exports = queryGetActivities;