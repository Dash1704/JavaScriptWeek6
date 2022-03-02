const User = require('./user');

describe('User class', () => {
  describe('getName', () => {
    it('should get a name from user', () => {
      const user = new User('Ali')
      expect(user.getName()).toBe('Ali')
    });
  });

  describe('getIntro', () => {
    it('should give an intro for the user', () => {
      const user = new User('Ali')
      expect(user.getIntro()).toBe('Hi, my name is Ali')
    });
  });
});

