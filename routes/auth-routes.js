const router = require('express').Router();
const passport = require('passport');
const authCheck = (req, res, next)=>{
    console.log("*************************");
    console.log(req.user);
    if(!req.user){
        // User is not logged in
        res.redirect('/auth/login');
    }
    else{
        res.redirect('/profile');
    }
}
// auth login
router.get('/login',authCheck,(req, res)=>{
    res.render('login');
});

// auth logout
router.get('/logout',(req, res)=>{
    // handle with passport
    res.send('logging out');
});

// auth with google
router.get('/google',passport.authenticate('google',{
    scope: ['profile']
}));

// callback route for google to redirect to
router.get('/google/callback',passport.authenticate('google'),(req, res)=>{
    res.send(req.user);
    //res.send('you reached the callback URI');
});

module.exports = router;