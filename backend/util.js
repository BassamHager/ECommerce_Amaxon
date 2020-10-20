import jwt from "jsonwebtoken";
import config from "./config";

const getToken = (user) => {
  const { _id, name, email, isAdmin } = user;
  return jwt.sign({ _id, name, email, isAdmin }, config.JWT_SECRET, {
    expiresIn: "48h",
  });
};

const isAuth = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth) {
    const token = auth.split(" ")[1];
    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).send({ msg: "Invalid Token!" });
      req.user = decoded;
      return next();
    });
  }
  return res.status(401).send({ msg: "Token is not supplied!" });
};

const isAdmin = (req, res, next) => {
  if (req.user.isAdmin) return next();
  return res.status(401).send({ msg: "Admin token is not valid!" });
};

// error instantiating
class HttpError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.code = errorCode;
  }
}
const sendHttpErr = () => new HttpError(msg, errCode);

export { getToken, isAuth, isAdmin, sendHttpErr };
