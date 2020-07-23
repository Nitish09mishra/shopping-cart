const express = require('express')
const csrf = require('csurf')
const router = new express.Router()
const passport = require('passport')

const csrfProtection = csrf()
router.use(csrfProtection)


// router for profile...
router.get('/profile', isLoggedIn, (req, res, next) => {
    res.render('user/profile', {title: 'This is profile page'})
})
// router for logout...
router.get('/logout',isLoggedIn, (req, res, next) => {
    req.logout()
    res.redirect('/')
})

// router for signup
router.get('/signup', notLoggedIn, (req, res ) => {
    const messages = req.flash('error')
    res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length>0})
})
router.post('/signup', notLoggedIn, passport.authenticate('local_signup', {
    successRedirect:'/profile',
    failureRedirect: '/signup',
    failureFlash: true 
}))

// router for login....
router.get('/signin', notLoggedIn, (req, res, next) => {
    const messages = req.flash('error')
    res.render('user/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length>0})
})
router.post('/signin', notLoggedIn, passport.authenticate('local_signin',  {
    successRedirect:'/profile',
    failureRedirect: '/signin',
    failureFlash: true 
}))


// exporting router to app.js....
module.exports = router

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next()
    }
    res.redirect('/')
}

function notLoggedIn(req, res, next) {
    if(!req.isAuthenticated()) {
        return next()
    }
    res.redirect('/')
}
