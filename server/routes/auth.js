const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const multer = require("multer")

const User = require("../models/User")

/* Configuration Multer for File Upload */
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "public/uploads/") // Store upload files in the 'uploads' folder
    },
    filename: function ( req,file,cb ){
        cb(null, file.originalname) // Use the original file name
    }
})

const upload = multer({ storage })

/* register */
router.post("/register", upload.single('profileImage'), async (req, res) => {
    try{
        /* take all info from form */
        const { firstName, lastName, email, password } = req.body

        /* the uploaded file is available as req.file */ 
        const profileImage = req.file

        if(!profileImage){
            return res.status(400).send("No file uploaded")
        }
    } catch (err) {

    }
})