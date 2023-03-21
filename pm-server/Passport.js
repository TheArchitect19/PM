const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser((user , done) => {
	done(null , user);
})
passport.deserializeUser(function(user, done) {
	done(null, user);
});

passport.use(new GoogleStrategy({
	clientID:"558444297190-9ehe9suevqge9eitqgofl77j87qukgs0.apps.googleusercontent.com", // Your Credentials here.
	clientSecret:"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", // Your Credentials here.
	// callbackURL:"http://localhost:5000/auth/callback",
	callbackURL:"https://pandrimarket.com/store/auth/callback",
	passReqToCallback:true
},
function(request, accessToken, refreshToken, profile, done) {
	return done(null, profile);
}
));