const mongoose = require("mongoose")

const usersSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profileImagePath: {
            type: String,
            default: "",
        },
        tripList: {
            type: Array,
            default: [],
        },
        wishList: {
            type: Array,
            default: [],
        },
        propertyList: {
            type: Array,
            default: [],
        },
        reservationList: {
            type: Array,
            default: [],
        },
    }
)