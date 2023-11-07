const cardDb = require('../../../data-access/cardDb');
const CustomerDb = require('../../../data-access/CustomerDb');

const cardSchema = require('../../../validation/schema/card');

const createValidation = require('../../../validation')(cardSchema.createSchema);
const updateValidation = require('../../../validation')(cardSchema.updateSchema);
const filterValidation = require('../../../validation')(cardSchema.filterValidationSchema);
const addCardUsecase = require('../../../use-case/card/addCard')({
  cardDb,
  createValidation 
});
const findAllCardUsecase = require('../../../use-case/card/findAllCard')({
  cardDb,
  filterValidation
});
const getCardCountUsecase = require('../../../use-case/card/getCardCount')({
  cardDb,
  filterValidation
});
const getCardUsecase = require('../../../use-case/card/getCard')({
  cardDb,
  filterValidation
});
const updateCardUsecase = require('../../../use-case/card/updateCard')({
  cardDb,
  updateValidation 
});
const partialUpdateCardUsecase = require('../../../use-case/card/partialUpdateCard')({ cardDb });
const softDeleteCardUsecase = require('../../../use-case/card/softDeleteCard')({
  cardDb,
  CustomerDb
});
const softDeleteManyCardUsecase = require('../../../use-case/card/softDeleteManyCard')({
  cardDb,
  CustomerDb
});
const bulkInsertCardUsecase = require('../../../use-case/card/bulkInsertCard')({ cardDb });
const bulkUpdateCardUsecase = require('../../../use-case/card/bulkUpdateCard')({ cardDb });
const deleteCardUsecase = require('../../../use-case/card/deleteCard')({
  cardDb,
  CustomerDb
});
const deleteManyCardUsecase = require('../../../use-case/card/deleteManyCard')({
  cardDb,
  CustomerDb
});

const cardController = require('./card');

const addCard = cardController.addCard(addCardUsecase);
const findAllCard = cardController.findAllCard(findAllCardUsecase);
const getCardCount = cardController.getCardCount(getCardCountUsecase);
const getCardById = cardController.getCard(getCardUsecase);
const updateCard = cardController.updateCard(updateCardUsecase);
const partialUpdateCard = cardController.partialUpdateCard(partialUpdateCardUsecase);
const softDeleteCard = cardController.softDeleteCard(softDeleteCardUsecase);
const softDeleteManyCard = cardController.softDeleteManyCard(softDeleteManyCardUsecase);
const bulkInsertCard = cardController.bulkInsertCard(bulkInsertCardUsecase);
const bulkUpdateCard = cardController.bulkUpdateCard(bulkUpdateCardUsecase);
const deleteCard = cardController.deleteCard(deleteCardUsecase);
const deleteManyCard = cardController.deleteManyCard(deleteManyCardUsecase);

module.exports = {
  addCard,
  findAllCard,
  getCardCount,
  getCardById,
  updateCard,
  partialUpdateCard,
  softDeleteCard,
  softDeleteManyCard,
  bulkInsertCard,
  bulkUpdateCard,
  deleteCard,
  deleteManyCard,
};