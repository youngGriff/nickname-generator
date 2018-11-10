require('./generator.js');


test('Generator', () => {
  const gen = new Generator();

  expect(gen.data.region === 'Albania').toBeTruthy();

});
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2 ).toBe(3);
});
