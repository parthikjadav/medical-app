const { createToken } = require("../middleweres/auth")
const { userSrvice } = require("../services")

const registerUser = async (req, res) => {

    let user = await userSrvice.registerUser(req.body)

    res.status(200).json({ success: true, user })

}

const addMedicine = async (req, res) => {
    let medicine = await userSrvice.addMedicine(req.body)
    // console.log(medicine)
    res.status(200).json({ success: true, medicine })
}

const loginUser = async (req, res) => {
    try {

        let { username, password } = req.body

        let user = await userSrvice.getUser(username)
        if (!user) {
            throw new Error("User not found")
        } else {
            if (user.password === password) {
                let token = createToken(user)
                res.cookie("token", token)
                res.status(200).json({ success: true, token })
            } else {
                res.status(401).json({ success: false, message: "Invalid Credentials" })
            }
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getMedicine = async (req, res) => {
    let medicine = await userSrvice.getMedicine()
    // console.log(medicine)
    let user = req.user
    res.status(200).json({ success: true, user, medicine })
}

module.exports = { registerUser, addMedicine, loginUser, getMedicine }