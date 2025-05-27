const router = require("express").Router()

const Booking = require("../models/Booking")
const User = require("../models/User")
const Listing = require("../models/Listing")

// get trip list
router.get("/:userId/trips", async (req, res) => {
    try {
        const { userId } = req.params
        const trips = await Booking.find({ customerId: userId }).populate("customerId hostId listingId")
        res.status(202).json(trips)
    } catch(err){
        console.log(err)
        res.status(404).json({ message: "Cannot find trips!" , error: err.message })
    }   
})

// add listing to wishlist
router.patch("/:userId/:listingId", async (req, res) => {
    try {
        const { userId, listingId } = req.params
        const user = await User.findById(userId)
        const listing = await Listing.findById(listingId)
    } catch (err) {}
})

module.exports = router