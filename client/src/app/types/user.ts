export class User {
  username: string;
  password: string;

  constructor(obj?: User) {
    Object.assign(this, obj ? obj : {});
  }
}
