const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];



    if (!token) return res.json({ message: "Token missing" });



    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {

        if (err) return res.json({ message: "Invalid token" });



        req.user = user;

        next();

    });

}

module.exports = authMiddleware;
