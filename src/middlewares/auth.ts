import Express from "express";
import HttpError from "../interfaces/http-error";
import HttpStatus from "../interfaces/http-status";
import { keycloakAuth } from "./auth-provider/keycloak";

export async function expressAuthentication(
  request: Express.Request,
  securityName: string,
  scopes?: string[],
) {
  switch (securityName) {
    case "keycloak":
      return keycloakAuth(request, securityName, scopes);
    default:
      throw new HttpError(HttpStatus.NOT_IMPLEMENTED, "ไม่ทราบวิธียืนยันตัวตน");
  }
}
