const response = require('../../utils/response');

const getDependencyCount = ({
  cardDb,CustomerDb
})=> async (filter) =>{
  let card = await cardDb.findMany(filter);
  if (card.length){
    let cardIds = card.map((obj) => obj.id);

    const CustomerFilter = { '$or': [{ cards : { '$in' : cardIds } }] };
    const CustomerCnt =  await CustomerDb.count(CustomerFilter);
    let result = { Customer :CustomerCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  card : 0 }
    });
  }
};

const deleteWithDependency = ({
  cardDb,CustomerDb
})=> async (filter) =>{
  let card = await cardDb.findMany(filter);
  if (card.length){
    let cardIds = card.map((obj) => obj.id);

    const CustomerFilter = { '$or': [{ cards : { '$in' : cardIds } }] };
    const CustomerCnt =  (await CustomerDb.deleteMany(CustomerFilter));
    let deleted = (await cardDb.deleteMany(filter));
    let result = { Customer :CustomerCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  card : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  cardDb,CustomerDb
}) => async (filter,updateBody) =>{
  let card = await cardDb.findMany(filter);
  if (card.length){
    let cardIds = card.map((obj) => obj.id);

    const CustomerFilter = { '$or': [{ cards : { '$in' : cardIds } }] };
    const CustomerCnt =  (await CustomerDb.updateMany(CustomerFilter,updateBody));
    let updated = (await cardDb.updateMany(filter,updateBody));
    let result = { Customer :CustomerCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  card : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
