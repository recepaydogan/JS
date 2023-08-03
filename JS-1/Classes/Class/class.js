class User {
  constructor(username, eMail, password) {
    this.userName = username;
    this.eMail = eMail;
    this.password = password;
  }

  login() {
    return `${this.userName} has logged in`;
  }
  logout() {
    return `${this.userName} has logged out`;
  }
}

const userOne = new User("recep", "rrr_rr@outlook.com", 1234);
const userTwo = new User("özge", "öö_öö@outlook.com", 234324);

// console.log(userOne.login(), " ", userOne + " \n", userTwo , "\n", userTwo.login());

console.log(
  userTwo.login(),
  "\n",
  userTwo,
  "\n",
  userOne.login(),
  "\n ",
  userOne
);
