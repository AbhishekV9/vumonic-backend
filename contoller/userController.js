
const jwt=require("jsonwebtoken");

module.exports.home=function(req,res){
    return res.render('welcome');
}

module.exports.generateToken=function(req,res){
    var token = jwt.sign({username:"ado"}, 'vumonic-datalabs',{expiresIn: "3600000"});
    return res.render("token",{
        token
    })
}

module.exports.getFile=function(req,res){
    var token = req.query.token;
    jwt.verify(token, 'vumonic-datalabs', function(err, decoded){
      if(!err){ 
        return res.render('home')
      } else {
        res.status(401).json({
            messaage:"Not Authorized"
        });
      }
    })
}