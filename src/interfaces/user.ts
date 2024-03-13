import type { Request } from "express";

export type RequestWithUser = Request & {
  user: {
    name: string;
    given_name: string;
    familiy_name: string;
    preferred_username: string;
    email: string;
    role: string[];
  };
};
