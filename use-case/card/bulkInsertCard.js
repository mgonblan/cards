
/**
 *bulkInsertCard.js
 */

const  cardEntity = require('../../entities/card');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Cards. {status, message, data}
 */

const bulkInsertCard = ({ cardDb }) => async (dataToCreate,req,res) => {
  let cardEntities = dataToCreate.map(item => cardEntity(item));
  let createdCard = await cardDb.create(cardEntities);
  return response.success({ data:{ count:createdCard.length || 0 } });
};
module.exports = bulkInsertCard;