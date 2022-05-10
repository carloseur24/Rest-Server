require('dotenv').config()
const express = require("express");
const cors = require("cors");
const {main} = require('../database/configmg');

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users'
        //connect to db
        this.mongoDb()
        //MiddleWares
        this.middlewares()
        // Routes
        this.routes()
    }
    async pgDb() {
        await test();
    }
    async mongoDb() {
        await main();
    }

    middlewares() {
        //cors
        this.app.use(cors())
        //Read and Parse
        this.app.use(express.json())
        //Public directory
        this.app.use(express.static('public'))
    }
    routes() {
        this.app.use(this.usuariosPath, require('../routes/users'))
    }
    start() {
        this.app.listen(this.port, () => {
            console.log('Listen in port:' + this.port)
        })
    }

}
module.exports = Server;