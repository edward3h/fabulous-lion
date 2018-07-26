import FacebookStrategy from 'passport-facebook';
import User from './user-model';

const init = (passport) => {
  passport.use("facebook",
               new FacebookStrategy(
    {
      clientID: process.env.FB_CLIENT_ID,
      clientSecret: process.env.FB_CLIENT_SECRET,
      callbackURL: `https://${process.env.PROJECT_DOMAIN}/auth/cbFacebook`,
      profileFields: ['id', 'displayName', 'profile_pic', 'email']
    }),
    (accessToken, refreshToken, profile, done) => {
    User.findOrCreate(profile, function (err, user) {
      return done(err, user);
    });
  });
};

export default init;