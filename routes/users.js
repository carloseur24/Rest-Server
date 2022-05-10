const {
    Router
} = require('express');
const {
    check,
} = require('express-validator');
const {
    rolvalidator,
    emailvalidator,
    uservalidator
} = require('../helpers/dbvalidators')
const {
    campval
} = require('../middlewares/validator');
const {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch,
} = require('../controllers/users');
const router = Router();


router.get('/', usersGet)
router.put('/:id', [
    check('id', `this isn't a valid ID`).isMongoId(),
    check('id').custom(uservalidator),
    check('rol').custom(rolvalidator),
    campval
], usersPut)

router.post('/', [
    check('name', 'The name is required').not().isEmpty(),
    check('pass', 'The pass is required and it must has 6 or more words').isLength({
        min: 6
    }),
    check('email', 'This value isnt a email').isEmail(),
    check('email').custom(emailvalidator),
    // check('rol', 'This rol isnt permited').isIn(['ADMIN_ROLE','USER_ROLE']),
    check("rol").custom(rolvalidator),
    campval
], usersPost)

router.delete('/:id', [
    check('id', `this isn't a valid ID`).isMongoId(),
    check('id').custom(uservalidator),
    campval
], usersDelete)

router.patch('/', usersPatch)

module.exports = router;