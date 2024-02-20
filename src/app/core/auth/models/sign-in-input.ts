export class SignInInput {
  constructor(public username?: string, public password?: string) {
    this.username = username;
    this.password = password;
  }
}
