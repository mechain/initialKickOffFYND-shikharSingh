const router = require("express").Router();


const signUp = require("../components/signup.component")



router.get("/signup",signUp)

module.exports = router