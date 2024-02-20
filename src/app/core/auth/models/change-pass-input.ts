export class ChangePassInput {
  constructor(public oldPassword?: string, public newPassword?: string) {
    this.oldPassword = oldPassword;
    this.newPassword = newPassword;
  }
}
