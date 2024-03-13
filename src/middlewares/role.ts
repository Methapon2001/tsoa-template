import { Response, NextFunction } from "express";
import { RequestWithUser } from "../interfaces/user";
import HttpError from "../interfaces/http-error";
import HttpStatus from "../interfaces/http-status";

export function role(
  role: string | string[],
  errorMessage: string = "คุณไม่มีสิทธิในการเข้าถึงทรัพยากรดังกล่าว",
) {
  return (req: RequestWithUser, _res: Response, next: NextFunction) => {
    if (!Array.isArray(role) && !req.user.role.includes(role) && !req.user.role.includes("*")) {
      throw new HttpError(HttpStatus.FORBIDDEN, errorMessage);
    }
    if (role !== "*" && !req.user.role.some((v) => role.includes(v))) {
      throw new HttpError(HttpStatus.FORBIDDEN, errorMessage);
    }
    return next();
  };
}
