const User = require('./user');

class UserBase {
  constructor(nameList) {
    this.nameList = nameList
  }

  count() {
    return this.nameList.length
  };

  getNames() {
    return this.nameList
    .map(newArray => newArray.getName())
  }

  getIntros() {
    return this.nameList
    .map(newArray => newArray.getIntro())
  }

}
  












module.exports = UserBase;