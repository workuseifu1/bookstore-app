const express = require("express");

const router = express.Router();
router.get("/", function(require,response){
//console.log("hello ");
response.render("index");
});

router.get("/home", function(require,response){
    
    response.render("home");
    });
    router.get("/about", function(require,response){
    
        response.render("about");
         });
 router.get("/register", function(require,response){
    
    response.render("register");
    });
  router.get("/contact", function(require,response){
    
    response.render("contact");
    });    
  router.get("/login", function(require,response){
    
    response.render("login");
    });
  router.get("/signup", function(require,response){
    
    response.render("signup");
    });        
module.exports = router;