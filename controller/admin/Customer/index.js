const CustomerDb = require('../../../data-access/CustomerDb');

const CustomerSchema = require('../../../validation/schema/Customer');

const createValidation = require('../../../validation')(CustomerSchema.createSchema);
const updateValidation = require('../../../validation')(CustomerSchema.updateSchema);
const filterValidation = require('../../../validation')(CustomerSchema.filterValidationSchema);
const addCustomerUsecase = require('../../../use-case/Customer/addCustomer')({
  CustomerDb,
  createValidation 
});
const findAllCustomerUsecase = require('../../../use-case/Customer/findAllCustomer')({
  CustomerDb,
  filterValidation
});
const getCustomerCountUsecase = require('../../../use-case/Customer/getCustomerCount')({
  CustomerDb,
  filterValidation
});
const getCustomerUsecase = require('../../../use-case/Customer/getCustomer')({
  CustomerDb,
  filterValidation
});
const updateCustomerUsecase = require('../../../use-case/Customer/updateCustomer')({
  CustomerDb,
  updateValidation 
});
const partialUpdateCustomerUsecase = require('../../../use-case/Customer/partialUpdateCustomer')({ CustomerDb });
const softDeleteCustomerUsecase = require('../../../use-case/Customer/softDeleteCustomer')({ CustomerDb });
const softDeleteManyCustomerUsecase = require('../../../use-case/Customer/softDeleteManyCustomer')({ CustomerDb });
const bulkInsertCustomerUsecase = require('../../../use-case/Customer/bulkInsertCustomer')({ CustomerDb });
const bulkUpdateCustomerUsecase = require('../../../use-case/Customer/bulkUpdateCustomer')({ CustomerDb });
const deleteCustomerUsecase = require('../../../use-case/Customer/deleteCustomer')({ CustomerDb });
const deleteManyCustomerUsecase = require('../../../use-case/Customer/deleteManyCustomer')({ CustomerDb });

const CustomerController = require('./Customer');

const addCustomer = CustomerController.addCustomer(addCustomerUsecase);
const findAllCustomer = CustomerController.findAllCustomer(findAllCustomerUsecase);
const getCustomerCount = CustomerController.getCustomerCount(getCustomerCountUsecase);
const getCustomerById = CustomerController.getCustomer(getCustomerUsecase);
const updateCustomer = CustomerController.updateCustomer(updateCustomerUsecase);
const partialUpdateCustomer = CustomerController.partialUpdateCustomer(partialUpdateCustomerUsecase);
const softDeleteCustomer = CustomerController.softDeleteCustomer(softDeleteCustomerUsecase);
const softDeleteManyCustomer = CustomerController.softDeleteManyCustomer(softDeleteManyCustomerUsecase);
const bulkInsertCustomer = CustomerController.bulkInsertCustomer(bulkInsertCustomerUsecase);
const bulkUpdateCustomer = CustomerController.bulkUpdateCustomer(bulkUpdateCustomerUsecase);
const deleteCustomer = CustomerController.deleteCustomer(deleteCustomerUsecase);
const deleteManyCustomer = CustomerController.deleteManyCustomer(deleteManyCustomerUsecase);

module.exports = {
  addCustomer,
  findAllCustomer,
  getCustomerCount,
  getCustomerById,
  updateCustomer,
  partialUpdateCustomer,
  softDeleteCustomer,
  softDeleteManyCustomer,
  bulkInsertCustomer,
  bulkUpdateCustomer,
  deleteCustomer,
  deleteManyCustomer,
};