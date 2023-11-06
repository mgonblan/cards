const {
  JWT,LOGIN_ACCESS,
  PLATFORM
} = require('../../constants/authConstant');
const dayjs = require('dayjs');
const userDb = require('../../data-access/userDb');
const userTokensDb = require('../../data-access/userTokensDb');
const generateToken = require('../../utils/generateToken');
const response = require('../../utils/response');

const githubLogin = async (email,platform) =>{
  if (platform == undefined){
    return response.badRequest({ message:'Please login through platform' });
  }
  const user = await userDb.findOne({ email });
  if (!user || !user.email) {
    return response.failure({ message:'User/Email not exists' });
  }
  const { ...userData } = user.toJSON();
  let token;
  if (!user.userType) {
    return response.badRequest({ message:'You have not been assigned any role' });
  }
  if (platform == 'admin'){
    if (!LOGIN_ACCESS[user.userType].includes(PLATFORM.ADMIN)){
      return {
        flag:true,
        data:'you are unable to access this platform'
      };
    }
    token = await generateToken(userData,JWT.ADMIN_SECRET);
  }
  else if (platform == 'device'){
    if (!LOGIN_ACCESS[user.userType].includes(PLATFORM.DEVICE)){
      return {
        flag:true,
        data:'you are unable to access this platform'
      };
    }
    token = await generateToken(userData,JWT.DEVICE_SECRET);
  }
  let expire = dayjs().add(JWT.EXPIRES_IN, 'second').toISOString();
  await userTokensDb.create({
    userId: user.id,
    token: token,
    tokenExpiredTime: expire 
  });                              
  const userToReturn = {
    ...userData,
    token 
  };
  return response.success({
    data:userToReturn,
    message:'Login Successful'
  });
};

module.exports = githubLogin;