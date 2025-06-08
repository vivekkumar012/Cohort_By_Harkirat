import jwt from 'jsonwebtoken'
export const JWT_SECRET = "abcderjfj";

export function auth(req, res, next) {
    const token = req.headers.token;
    const decodeData = jwt.verify(token, JWT_SECRET);

    if(decodeData) {
        req.userId = token.id;
        next();
    } else {
        res.status(403).json({
            message: "Invalid credentials"
        })
    }
}