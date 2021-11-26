const express = require("express");

const router = express.Router();
router.get("/", function(require,response){
//console.log("hello ");
response.json("This is a json status code for the users api");
});

/*router.get("/register", function(require,response){
    
    response.render("register");
    });

    router.get("/contact", function(require,response){
    
        response.render("contact");
         });*/
module.exports = router;