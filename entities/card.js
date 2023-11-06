module.exports = (card) => {

  let newCard = { 
    name: card.name,
    string: card.string,
    isDeleted: card.isDeleted,
    isActive: card.isActive,
    createdAt: card.createdAt,
    updatedAt: card.updatedAt,
    addedBy: card.addedBy,
    updatedBy: card.updatedBy,
    expirationDate: card.expirationDate,
    userID: card.userID,
    cardType: card.cardType,
    status: card.status,
    isDefault: card.isDefault,
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
