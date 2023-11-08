const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  name: joi.string().required(),
  number: joi.string().required(),
  startdate: joi.date().options({ convert: true }).allow(null).allow(''),
  expirydate: joi.date().options({ convert: true }).required(),
  cvv: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  name: joi.string().when({
    is:joi.exist(),
    then:joi.required(),
    otherwise:joi.optional()
  }),
  number: joi.string().when({
    is:joi.exist(),
    then:joi.required(),
    otherwise:joi.optional()
  }),
  startdate: joi.date().options({ convert: true }).allow(null).allow(''),
  expirydate: joi.date().options({ convert: true }).when({
    is:joi.exist(),
    then:joi.required(),
    otherwise:joi.optional()
  }),
  cvv: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}
).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      number: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      startdate: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      expirydate: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      cvv: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any(),
      _id: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object())
    }
    ).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  populate: joi.array().items(populate),
  select: select

}).unknown(true);

module.exports = {
  createSchema,
  updateSchema,
  filterValidationSchema
};