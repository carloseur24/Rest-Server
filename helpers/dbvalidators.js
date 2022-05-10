const Rol = require('../models/rol')
const User = require('../models/usermg')


const rolvalidator = async (rol = '') => {
    const existRol = await Rol.findOne({
        rol
    })
    if (!existRol) {
        throw new Error(`Rol ${rol} dosen't exist in data base`)
    }
}

const emailvalidator = async (email = '') => {
    const ifemail = await User.findOne({
        email
    });
    if (ifemail) {
        throw new Error(`This email ${email} already exist `)
    }
}
const uservalidator = async (id) => {
    const ifuser = await User.findById(
        id
    );
    if (!ifuser) {
        throw new Error(`This user ${id} doesn't exist `)
    }
}
module.exports = {
    rolvalidator,
    emailvalidator,
    uservalidator
};