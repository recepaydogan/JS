class User {
  constructor(username, eMail, password) {
    this.userName = username;
    this.eMail = eMail;
    this.password = password;
  }

  login() {
    console.log(`${this.userName} has logged in`);
    return this;
  }
  logout() {
    console.log(`${this.userName} has logged out`);
    return this;
  }
}

const userOne = new User("recep", "rrr_rr@outlook.com", 1234);
const userTwo = new User("özge", "öö_öö@outlook.com", 234324);

console.log(userOne.login().logout().logout());
