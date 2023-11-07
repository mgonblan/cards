module.exports = (Customer) => {

  let newCustomer = { 
    firstName: Customer.firstName,
    lastName: Customer.lastName,
    name: Customer.name,
    profile: Customer.profile,
    contactNumber: Customer.contactNumber,
    email: Customer.email,
    isActive: Customer.isActive,
    createdAt: Customer.createdAt,
    updatedAt: Customer.updatedAt,
    addedBy: Customer.addedBy,
    updatedBy: Customer.updatedBy,
    isDeleted: Customer.isDeleted,
    cards: Customer.cards,
  };

  // remove undefined values
  Object.keys(newCustomer).forEach(key => newCustomer[key] === undefined && delete newCustomer[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newCustomer) => {
   *   if (!newCustomer.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newCustomer) 
   */

  return Object.freeze(newCustomer);
};
