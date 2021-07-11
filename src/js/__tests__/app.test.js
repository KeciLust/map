import ErrorRepository from '../app';

const errors = new ErrorRepository();

test('error test false', () => {
  expect(errors.translate(1)).toBe('Unknown error');
});

test('error test true', () => {
  errors.error.set(1, 'Ошибка входа!');
  expect(errors.translate(1)).toEqual('Ошибка входа!');
});
