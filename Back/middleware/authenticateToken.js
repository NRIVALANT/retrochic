const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    // Récupère le token du header Authorization
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 


    if (token == null) {
        return res.sendStatus(401); // Pas de token, non autorisé
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log("Erreur de vérification JWT:", err);
            return res.status(403).json({ message: "Access Forbidden: Invalid Token", error: err.message });
        }
    
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;