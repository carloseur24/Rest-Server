const mongoose = require('mongoose');


const main = async () => {
    await mongoose.connect(process.env.MONGOG_CNN);
}
main()
.catch(err => console.log(err));

module.exports = {
    main
};