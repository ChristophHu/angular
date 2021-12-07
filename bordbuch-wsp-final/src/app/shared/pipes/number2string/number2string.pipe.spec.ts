import { Number2stringPipe } from './number2string.pipe';

describe('Number2stringPipe', () => {
  it('create an instance', () => {
    const pipe = new Number2stringPipe();
    expect(pipe).toBeTruthy();
  });
});
