import {GeneratorData} from './GeneratorData';


test('Generator', () => {
  const genData = new GeneratorData();
  expect(genData.data.region === 'Albania').toBeTruthy();
});
test('Generator', () => {
  const genData = new GeneratorData();
  genData.set('male', 'Italy');
  expect(genData.data).toEqual({
    gender: 'male',
    region: 'Italy'
  });
});
test('Generator', () => {
  const genData = new GeneratorData();
  genData.set('male', 'Italy');
  expect(genData.getUrl().toString()).toBe('https://uinames.com/api/?gender=male&region=Italy');
});
test('Generator', () => {
  const genData = new GeneratorData();
  genData.set('both', 'Albania');
  expect(genData.getUrl().toString()).toBe('https://uinames.com/api/?region=Albania');
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
