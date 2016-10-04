import HoneybadgerSchedule from '../../src/HoneybadgerSchedule';

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    const schedule = new HoneybadgerSchedule();
    expect(schedule.message()).toContain('Hey there, friend.');
  });
});
