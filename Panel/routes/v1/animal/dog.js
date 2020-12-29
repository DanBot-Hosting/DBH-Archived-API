const router = require('express').Router();
const axios = require('axios');

router.get('/', function(req, res, next) {

    axios.get("https://api.thedogapi.com/v1/images/search")
        .then((response) => {
            let data = response["data"][0];
            res.status(200).json({
                url: data["url"],
                size: {
                    width: data["width"],
                    height: data["height"],
                }
            })
        })
        .catch(function(e) {
            console.error(e)
            return res.status(500).send({ error: "an error has occured" });
        })
});

module.exports = router;
