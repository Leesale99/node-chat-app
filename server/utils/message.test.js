/**
 * @jest-environment node
 */

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const message = generateMessage('Admin', 'Hello');

    expect(message).toHaveProperty('from', 'Admin');
    expect(message).toHaveProperty('text', 'Hello');
    expect(message.createdAt).toEqual(expect.any(Number));
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const message = generateLocationMessage('Admin', '1', '2');

    expect(message.from).toMatch('Admin');
    expect(message.url).toMatch('https://www.google.com/maps?q=1,2');
  });
});
