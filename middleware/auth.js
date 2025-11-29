import jwt from "jsonwebtoken";
export const Auth = async (req, res, next) => {
  try {
    const authHeaders = req.headers.authorization;
    if (!authHeaders) {
      return res.status(401).json({ message: "Token not provided" });
    }
    const token = authHeaders.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token missing" });
    }

    const decoded = jwt.verify(token, process.env.SECRTE_CODE);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
  }
};
