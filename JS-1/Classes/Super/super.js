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
class adminUser extends User {
  constructor(username, eMail, password, title) {
    super(username, eMail, password);
    this.title = title;
  }
  deleteUser(deletedUser) {
    users = users.filter((user) => user.userName !== deletedUser.userName);
  }
}

const userOne = new User("recep", "rrr_rr@outlook.com", 1234);
const userTwo = new User("özge", "öö_öö@outlook.com", 234324);
const admin = new adminUser(
  "john",
  "jjj_jj@outlook.com",
  342342,
  "e-commercial"
);

console.log(admin);
