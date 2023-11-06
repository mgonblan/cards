const GithubStrategy = require('passport-github2').Strategy;
const { USER_TYPES } = require('../constants/authConstant');

const githubPassportStrategy = ({ userDb }) => passport => {
  
  passport.serializeUser(function (user, cb) {
    cb(null, user);
  });

  passport.deserializeUser(function (user, cb) {
    cb(null, user);
  });

  passport.use(new GithubStrategy({
    clientID: process.env.GITHUB_CLIENTID,
    clientSecret: process.env.GITHUB_CLIENTSECRET,
    callbackURL: process.env.GITHUB_CALLBACKURL,
    scope: ['public_profile', 'email']
  }, async function (accessToken, refreshToken, profile, done) {
    try {
      if (profile){
        let userObj = {
          'username':profile.displayName,
          'ssoAuth': { 'githubId': profile.id },
          'email': profile.emails !== undefined ? profile.emails[0].value : '',
          'password':'',
          'userType':USER_TYPES.User
        };
        let found = await userDb.findOne({ 'email': userObj.email });
        if (found) {
          const id = found.id;
          await userDb.updateOne({ _id:id }, userObj);
        }
        else {
          await userDb.create(userObj);
        }
        let user = await userDb.findOne({ 'ssoAuth.githubId':profile.id });
        return done(null, user);
      }
      return done(null,null,'Profile Not found');
    } catch (error){
      return done(error,null);
    }
  }
  ));
};

module.exports = githubPassportStrategy;