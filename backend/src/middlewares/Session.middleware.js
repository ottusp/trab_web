module.exports = {
    isAuth (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else return res.status(401).end();
    },

    isAdmin (req, res, next) {
        if (req.user?.isAdmin === true) {
            return next();   
        } else return res.status(403).end();
    }
}