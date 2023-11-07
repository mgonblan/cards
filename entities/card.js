module.exports = (card) => {

  let newCard = { 
    name: card.name,
    startdate: card.startdate,
    expirationdate: card.expirationdate,
    cvv: card.cvv,
    userID: card.userID,
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
