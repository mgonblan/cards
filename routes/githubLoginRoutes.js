const express = require('express');
const router = express.Router();
const passport = require('passport');

const githubLogin = require('../use-case/authentication/githubLogin');
const response = require('../utils/response');
const responseHandler = require('../utils/response/responseHandler');

router.get('/auth/github/error', (req, res) => {
  sendResponse(res,response.badRequest({ message:'Login Failed' }));
});

router.get('/auth/github',passport.authenticate('github', { 
  scope: ['profile', 'email'],
  session:false 
}));

router.get('/auth/github/callback',
  (req,res,next)=>{
    passport.authenticate('github', { failureRedirect: '/auth/github/error' }, async (error, user , info) => {
      if (error){
        return responseHandler(res,response.internalServerError({ message:error.message }));
      }
      if (user){
        try {
          let result = await githubLogin(user.email, req.session.platform);
          return responseHandler(res,result);
        } catch (error) {
          return responseHandler(res,response.internalServerError({ message: error.message }));
        }
      }
    })(req,res,next);
  });

module.exports = router;