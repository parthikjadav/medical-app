const { registerSchema, medicineSchema } = require("../models")

const registerUser = (body)=>{
 return registerSchema.create(body)
}

const addMedicine = (body)=>{
    return medicineSchema.create(body)
}

const getUser = (username)=>{
    return registerSchema.findOne({username})
}

const getMedicine = ()=>{
    return medicineSchema.find()
}

module.exports ={registerUser,addMedicine,getUser,getMedicine}