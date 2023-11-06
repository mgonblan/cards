const express = require('express');
const router = express.Router();
const cardController = require('../../controller/admin/card');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant'); 

router.route('/admin/card/create').post(auth(PLATFORM.ADMIN),checkRolePermission,cardController.addCard);
router.route('/admin/card/list').post(auth(PLATFORM.ADMIN),checkRolePermission,cardController.findAllCard);
router.route('/admin/card/count').post(auth(PLATFORM.ADMIN),checkRolePermission,cardController.getCardCount);
router.route('/admin/card/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,cardController.getCardById);
router.route('/admin/card/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,cardController.updateCard);   
router.route('/admin/card/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,cardController.partialUpdateCard);   
router.route('/admin/card/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,cardController.softDeleteCard);
router.route('/admin/card/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,cardController.softDeleteManyCard);
router.route('/admin/card/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,cardController.bulkInsertCard);
router.route('/admin/card/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,cardController.bulkUpdateCard); 
router.route('/admin/card/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,cardController.deleteCard);
router.route('/admin/card/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,cardController.deleteManyCard);

module.exports = router;
