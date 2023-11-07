/**
 *deleteManyCard.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeDeleteWithDependency = require('./deleteDependent').deleteWithDependency;
const response = require('../../utils/response');
    
/**
 * @description : delete documents from table by using ids.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : no of documents deleted. {status, message, data}
 */
const deleteManyCard = ({
  cardDb,CustomerDb
}) => async (params,req,res) => {
  let {
    query,isWarning 
  } = params;
  let deletedCard;
  if (isWarning){
    const getDependencyCount = makeGetDependencyCount({
      cardDb,
      CustomerDb
    });
    return await getDependencyCount(query);
  } else {
    const deleteWithDependency = makeDeleteWithDependency({
      cardDb,
      CustomerDb
    });
    return await deleteWithDependency(query);
  }
};
module.exports = deleteManyCard;