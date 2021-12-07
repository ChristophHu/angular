import { String2numberPipe } from './string2number.pipe';

describe('String2numberPipe', () => {
  it('create an instance', () => {
    const pipe = new String2numberPipe();
    expect(pipe).toBeTruthy();
  });
});
