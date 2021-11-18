import { registerKnock } from "./registerKnock";
import { knock } from "./knock";
import { login } from "./login";
import { loginPass } from "./loginPass";
import { setPassword } from "./setPassword";

export class AuthServices {
  static knock = knock;
  static setPassword = setPassword;
  static registerKnock = registerKnock;
  static loginPass = loginPass;
  static login = login;
}
