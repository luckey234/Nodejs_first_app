function log(req,res,next){
    console.log('Authentications.....');
    next();
}
module.exports =log