import jwt from 'jsonwebtoken'

export async function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const decodeData = await jwt.verify(token, process.env.JWT_USER_SECRET);
    if(decodeData) {
        req.useId = decodeData.id;
        next();
    } else {
        return res.status(403).json({
            message: "Unauthorized Access"
        })
    }
}