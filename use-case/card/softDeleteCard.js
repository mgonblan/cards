/**
 *softDeleteCard.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Card. {status, message, data}
 */
const softDeleteCard = ({ cardDb }) => async (params,req,res) => {
  let updatedCard = await cardDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedCard){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedCard });
};
module.exports = softDeleteCard;