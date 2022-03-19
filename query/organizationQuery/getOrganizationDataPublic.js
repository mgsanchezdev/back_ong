const Organizations = require("../../modelsConections/organizationModelConections");
const Media = require('../../modelsConections/mediaModelConnection')
const Image = require('../../modelsConections/imageModelConection')

const getOrganizationDataPublic = (organizationId) => {
  return Organizations.findOne({ 
    where: { id: organizationId } ,
    include: [ {model: Media, 
              attributes: ['facebook','instagram', 'linkedin'] },
                {
                  model: Image,
                  exclude: id
                }], 
    attributes: { exclude: ['id','createdAt', 'updatedAt'] }},);
};

module.exports = getOrganizationDataPublic;
