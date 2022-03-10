export class User {
  constructor(
    public isAdmin: boolean,
    public userName: string,
    public password: string,
    public email: string
  ) {}
}
