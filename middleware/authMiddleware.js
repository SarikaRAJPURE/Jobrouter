import { UnauthenticatedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

//authenticate user
export const authenticateUser = (req, res, next) => {
  //console.log(req.cookies);
  //check wether request has cookies or not and if not restrict access.
  const { token } = req.cookies;
  if (!token)
    throw new UnauthenticatedError(
      "authentication invalid"
    );
  try {
    //const user = verifyJWT(token);
    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };
    //console.log(user);
    next();
  } catch (error) {
    throw new UnauthenticatedError(
      "authentication invalid"
    );
  }
};
