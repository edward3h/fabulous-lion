import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get("/login-facebook", passport.authenticate("facebook"));

router.get("/cbFacebook", passport.authenticate("facebook"), (req, res) => {
  res.redirect("/")
});

export default router;