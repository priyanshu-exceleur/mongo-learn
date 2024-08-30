const User = require("../model/user")

const createUser = async (req, res) => {
    const { name, email, password } = req.body
    const existingUser = await User.findOne({ email })
    if (!existingUser) {
        const Create_User = new User({ name, email, password })
        const New_user = await Create_User.save()
        res.status(201).json({
            msg: "User Created Successfully",
            status: 201
        })
    }
    else {
        res.status(500).json({
            msg: "User Already Exists",
            status: 500
        })
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    const getUser = await User.findOne({ email })
    if (getUser && getUser.password === password) {
        res.status(200).json({
            msg: "User Login Successfully",
            status: 200
        })
    }
    else {
        res.status(401).json({
            msg: "Password Is Wrong Unauthorized ",
            status: 401
        })
    }

}

module.exports = {
    createUser,
    loginUser
};