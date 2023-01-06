import * as authenticator from "authenticator";

export function get_otp() {
  const formattedToken = authenticator.generateToken(process.env.AUTH_KEY);
  return formattedToken;
}