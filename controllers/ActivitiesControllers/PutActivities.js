const { MSG_UPDATE_ACTIVITIES, ERROR_FOR_ID_ACT } = require("../../const/const");

const Activities = require("../../modelsConections/activityModelConection");

const PutActivities = async (req, res) => {
  const { id } = req.params;
    
  try {
    await Activities.update(req.body, { where: { id } });
    return res.status(200).json({ message: MSG_UPDATE_ACTIVITIES });
  } catch {
    return res.status(404).json({ ERROR_FOR_ID_ACT });
  }
};

exports.PutActivities = PutActivities;