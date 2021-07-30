const jwt = require('jsonwebtoken');

// Session related middlewares
module.exports = {
    // Checks whether the user is autheticated or not. Used for functionalities that require the user to be logged in
    isAuth(req, res, next) {
        let token = req?.headers['x-access-token'];
    
        if (!token) {
            return res.status(401).json({ message: 'Login inválido' });
        }

        jwt.verify(token, 'segredomuitoseguro', (err, decoded) => {
            if (err) {
                return res.status(401).end();
            }
    
            req.userId = decoded.id;
            next();
        });
    },

    // Checks whether the user is an admin or not. Used for functionalities that require the user to be an admin
    isAdmin(req, res, next) {
        let token = req?.headers['x-access-token'];
    
        if (!token) {
            return next ? res.status(401).json({ message: 'Login inválido' }) : false;
        }
    
        jwt.verify(token, 'segredomuitoseguro', (err, decoded) => {
            if (err) {
                return next ? res.status(401).end() : false;
            }
        
            if (decoded.isAdmin == true) {
                return next ? next() : true;
            }
        
            return next ? res.status(403).end() : false;
        });
    },
}