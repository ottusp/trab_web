// Session related middlewares
module.exports = {
    // Checks whether the user is autheticated or not. Used for functionalities that require the user to be logged in
    isAuth (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else return res.status(401).end();
    },

    // Checks whether the user is an admin or not. Used for functionalities that require the user to be an admin
    isAdmin (req, res, next) {
        console.log(req);
        if (req.user?.isAdmin === true) {
            return next();   
        } else return res.status(403).end();
    }
}