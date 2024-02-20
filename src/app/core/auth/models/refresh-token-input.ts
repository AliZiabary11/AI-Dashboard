export class RefreshTokenInput {
  constructor(public accessToken: string, public refreshToken: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}
