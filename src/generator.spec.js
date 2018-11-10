import Generator from './generator.js';


test('Generator', () => {
  const gen = new Generator();
  expect(gen.data.region === 'Albania').toBeTruthy();
});
test('Generator', () => {
  const gen = new Generator();
  gen.set('male', 'Italy');
  expect(gen.data).toEqual({
    gender: 'male',
    region: 'Italy'
  });
});

/*
Fetch is defined
test('Promise', () => {
  const gen = new Generator();
  return gen.generate()
    .then(value => except(value !== null).toBeTruthy())
    .catch();

});
*/
