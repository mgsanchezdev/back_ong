const queryGetActivities = require('../../query/activitiesQueries/getActivitiesQuery');

const { ACTIVITIES_FOUND } = require('../../const/const');

const getActivities = async (req, res) => {
    try {
        const activitiesList = await queryGetActivities();
        return res.status(200).json({ data: activitiesList, message: ACTIVITIES_FOUND });
    } catch (error) {
        return res.status(404).json({ error: error });
    }
}

module.exports = getActivities;