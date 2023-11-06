/**
 *addCustomer.js
 */

const  CustomerEntity = require('../../entities/Customer');
const response = require('../../utils/response');
/**
 * @description : create new record of Customer in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addCustomer = ({
  CustomerDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let Customer = CustomerEntity(dataToCreate);
  Customer = await CustomerDb.create(Customer);
  return response.success({ data:Customer });
};
module.exports = addCustomer;