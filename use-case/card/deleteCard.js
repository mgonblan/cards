
/**
 *deleteCard.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Card. {status, message, data}
 */
const deleteCard = ({ cardDb }) => async (query,req,res) => {
  let deletedCard = await cardDb.deleteOne(query);
  if (!deletedCard){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedCard });
};

module.exports = deleteCard;