/**
 * @jest-environment node
 */

const { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const message = generateMessage('Admin', 'Hello');

    expect(message).toHaveProperty('from', 'Admin');
    expect(message).toHaveProperty('text', 'Hello');
    expect(message.createdAt).toEqual(expect.any(Number));
  });
});
