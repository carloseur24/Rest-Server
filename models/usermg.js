const {
    Schema,
    model
} = require('mongoose');

const UsuariosSchema = Schema({

    name: {
        type: String,
        required: [true, 'This field is required']
    },
    email: {
        type: String,
        required: [true, 'This field is required'],
        unique: true
    },
    pass: {
        type: String,
        required: [true, 'This field is required']
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        emun: ['Admin_ROLE', 'USER_ROLE']
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
})

UsuariosSchema.methods.toJSON = function () {
    const {
        __v,
        pass,
        ...user
    } = this.toObject();
    return user;
} 
module.exports = model('Usuario', UsuariosSchema);