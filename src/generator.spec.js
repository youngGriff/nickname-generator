import { Generator } from './generator.js';

test('Generator', () => {
  const gen = new Generator;
  return gen.generate()
    .then(value => expect(value !== null).toBeTruthy());
});
