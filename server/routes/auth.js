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

        /* path to the uploaded profile photo */
        const profileImagePath = profileImage.path

        /* Check if user exists */
        const existingUser = await User.findOne({ email })
        if (existingUser){
            return res.status(409).json({ message: "User already exists!" })
        }

        /* hass the password */
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)

        /* Create a new User */
        const newUser = new User ({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            profileImagePath,
        });

        /* Save the new User */
        await newUser.save()

        res.status(200).json({ message: "User registered successfully!", user: newUser })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Registration failed!", error: err.message })
    }
})

module.exports = router