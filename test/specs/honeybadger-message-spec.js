import HoneybadgerSchedule from '../../src/HoneybadgerSchedule';

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    expect(HoneybadgerSchedule.message).toEqual('Hey there, friend. This week _you_ are *on* Honeybadger duty!');
  });
});
