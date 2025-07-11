const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles 00 minutes - 3:00', () => {
    const timeInWords = convertTimeToWords('3:00');
    expect(timeInWords).toBe("three o'clock");
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times before 30 mins - 2:15', () => {
    const timeInWords = convertTimeToWords('2:15');
    expect(timeInWords).toBe('quarter past two');
  });

  it('Handles times before 30 mins - 2:20', () => {
    const timeInWords = convertTimeToWords('2:20');
    expect(timeInWords).toBe('twenty past two');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times after 30 mins - 2:50', () => {
    const timeInWords = convertTimeToWords('2:50');
    expect(timeInWords).toBe('ten to three');
  });
});
