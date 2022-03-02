const User = require('./user');
const UserBase = require('./userBase');



describe('UserBase class', () => {
  const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];
  const userBase = new UserBase(users);

  it('count', () => {
    expect(userBase.count()).toBe(3)
  });

  it('lists all the names', () => {
    expect(userBase.getNames()).toEqual(['Uma', 'Josh', 'Ollie'])
  });

  it('gives an intro before the name', () => {
    expect(userBase.getIntros()).toEqual(['Hi, my name is Uma',
    'Hi, my name is Josh',
    'Hi, my name is Ollie'])
  });
});