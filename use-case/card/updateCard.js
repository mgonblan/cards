/**
 *updateCard.js
 */

const  cardEntity = require('../../entities/card');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Card. {status, message, data}
 */
const updateCard = ({
  cardDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let card = cardEntity(dataToUpdate);
  card = await cardDb.updateOne(query,card);
  if (!card){
    return response.recordNotFound();
  }
  return response.success({ data:card });
};
module.exports = updateCard;