/**
 *partialUpdateCard.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Card. {status, message, data}
 */
const partialUpdateCard = ({ cardDb }) => async (params,req,res) => {
  const card = await cardDb.updateOne(params.query,params.dataToUpdate);
  if (!card){
    return response.recordNotFound();
  }
  return response.success({ data:card });
};
module.exports = partialUpdateCard;