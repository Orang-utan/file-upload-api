import express from "express";
import errorHandler from "../routes/error";

const auth = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): unknown => {
  let token = req.headers.authorization;
  if (!token)
    return errorHandler(res, "Your access token is invalid.", "invalidToken");
  token = token.replace("Bearer ", "");

  // if (token !== ADMIN_API_KEY)
  //   return errorHandler(res, "Your access token is invalid.", "invalidToken");

  next();
};

export default auth;
