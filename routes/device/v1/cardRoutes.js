const express = require('express');
const router = express.Router();
const cardController = require('../../../controller/device/v1/card');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/card/create').post(auth(PLATFORM.DEVICE),checkRolePermission,cardController.addCard);
router.route('/device/api/v1/card/list').post(auth(PLATFORM.DEVICE),checkRolePermission,cardController.findAllCard);
router.route('/device/api/v1/card/count').post(auth(PLATFORM.DEVICE),checkRolePermission,cardController.getCardCount);
router.route('/device/api/v1/card/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,cardController.getCardById);
router.route('/device/api/v1/card/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,cardController.updateCard);   
router.route('/device/api/v1/card/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,cardController.partialUpdateCard);   
router.route('/device/api/v1/card/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,cardController.softDeleteCard);
router.route('/device/api/v1/card/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,cardController.softDeleteManyCard);
router.route('/device/api/v1/card/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,cardController.bulkInsertCard);
router.route('/device/api/v1/card/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,cardController.bulkUpdateCard); 
router.route('/device/api/v1/card/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,cardController.deleteCard);
router.route('/device/api/v1/card/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,cardController.deleteManyCard);

module.exports = router;
