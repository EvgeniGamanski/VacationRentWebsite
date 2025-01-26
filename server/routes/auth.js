const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const multer = require("multer")

const User = require("../models/User")

/* register */
router.post("/register", upload.single('profileImage'), async (req, res) => {
    try{
        /* take all info from form */
        const { firstName, lastName, email, password } = req.body
    }
    catch (err) {

    }
})