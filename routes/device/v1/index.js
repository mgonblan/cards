const express =  require('express');
const router =  express.Router();
router.use('/device/auth',require('./auth'));
router.use(require('./cardRoutes'));
router.use(require('./CustomerRoutes'));
router.use(require('./userRoutes'));
router.use(require('./uploadRoutes'));

module.exports = router;
