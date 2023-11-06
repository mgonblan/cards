const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware');
const authController = require('../../controller/admin/authentication');
const { PLATFORM } =  require('../../constants/authConstant');  
router.route('/register').post(authController.register);
router.route('/login').post(authController.authentication);
router.route('/forgot-password').post(authController.forgotPassword);
router.route('/validate-otp').post(authController.validateResetPasswordOtp);
router.route('/reset-password').put(authController.resetPassword);
router.route('/logout').post(auth(PLATFORM.ADMIN),authController.logout);
router.route('/login/github').get((req,res)=>{
  req.session.platform = 'admin';
  res.redirect(`http://localhost:${process.env.PORT}/auth/github`);
});

module.exports = router;
