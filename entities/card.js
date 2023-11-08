module.exports = (card) => {

  let newCard = { 
    name: card.name,
    number: card.number,
    startdate: card.startdate,
    expirydate: card.expirydate,
    cvv: card.cvv,
    isDeleted: card.isDeleted,
    isActive: card.isActive,
    createdAt: card.createdAt,
    updatedAt: card.updatedAt,
    addedBy: card.addedBy,
    updatedBy: card.updatedBy,
  };

  // remove undefined values
  Object.keys(newCard).forEach(key => newCard[key] === undefined && delete newCard[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newCard) => {
   *   if (!newCard.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newCard) 
   */

  return Object.freeze(newCard);
};
