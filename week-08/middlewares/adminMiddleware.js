import jwt from 'jsonwebtoken'

export async function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const decodeData = jwt.verify(token, process.env.JWT_ADMIN_SECRET);
    if(decodeData) {
        req.adminId = decodeData.id;
        next();
    } else {
        res.status(403).json({
            msg: "Please Signin as a admin"
        })
    }
}