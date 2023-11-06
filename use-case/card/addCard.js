/**
 *addCard.js
 */

const  cardEntity = require('../../entities/card');
const response = require('../../utils/response');
/**
 * @description : create new record of card in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addCard = ({
  cardDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let card = cardEntity(dataToCreate);
  card = await cardDb.create(card);
  return response.success({ data:card });
};
module.exports = addCard;