const { Users } = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: '1',
        name: 'Mike',
        room: 'Node Course'
      },
      {
        id: '2',
        name: 'Jen',
        room: 'React Course'
      },
      {
        id: '3',
        name: 'Julie',
        room: 'Node Course'
      }
    ];
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Sale',
      room: 'Developers'
    };

    const resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    const userId = '1';
    const user = users.removeUser(userId);

    expect(user.id).toEqual(userId);
    expect(users.users).toHaveLength(2);
  });

  it('should not remove user', () => {
    const userId = '99';
    const user = users.removeUser(userId);

    expect(user).toBeUndefined();
    expect(users.users).toHaveLength(3);
  });

  it('should find user', () => {
    const userId = '2';
    const user = users.getUser(userId);
    expect(user.id).toEqual(userId);
  });

  it('should not find user', () => {
    const userId = '4';
    const user = users.getUser(userId);
    expect(user).toBeUndefined();
  });

  it('should return names for Node Course', () => {
    const userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for React Course', () => {
    const userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
});
