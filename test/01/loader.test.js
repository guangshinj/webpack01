import compiler from './compiler.js';
import "@babel/polyfill";
test('Inserts name and outputs JavaScript', async () => {
  const stats = await compiler('example.txt');
  const output = stats.toJson().modules[0].source;
  expect(output).toBe(`export default "Hey Alice!\\r\\n\"`)
}, 10000)