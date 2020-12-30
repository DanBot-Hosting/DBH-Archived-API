const express = require("express");

class API {
    constructor(port = 3000) {
        this.port = port;
        this.app = express();

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));

        // CORS middleware
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', '*');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        });

        this.app.use((req, res, next) => {
            console.log(`[${req.method}] request on ${req.originalUrl} from ${req.ip.split(":").pop()}`);
            next();
        });

        this.app.use("/", require('../../routes'));
        
        this.app.all("*", (req, res) => {
            res.status(404).json({ error: "invalid route" });
        });

        this.listen();

    }

    listen(port = this.port) {
        this.app.listen(port, () => {
            console.log(`Server running on: ${global.config.api.host}:${global.config.api.port}`);
        });
    }


}

module.exports = API;