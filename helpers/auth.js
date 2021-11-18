export class AuthHelper {
  static isMobile = (emailOrMobile) => {
    return Number(emailOrMobile) && emailOrMobile.length === 11 ? true : false;
  };
}
