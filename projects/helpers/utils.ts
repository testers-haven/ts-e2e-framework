import * as authenticator from "authenticator";

export function get_otp() {
  var formattedToken = authenticator.generateToken(process.env.TEST_USER1_GOOGLE_AUTH_KEY);
  return formattedToken;
}
