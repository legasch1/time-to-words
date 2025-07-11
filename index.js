// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  } else if (time === '12:00') {
    return 'midday';
  }

  let timeWord = '';
  const hourWord = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '21': 'twenty one',
    '22': 'twenty two',
    '23': 'twenty three',
    '24': 'twenty four',
    '25': 'twenty five',
    '26': 'twenty six',
    '27': 'twenty seven',
    '28': 'twenty eight',
    '29': 'twenty nine',
  };

  const timeData = time.split(':');
  const hour = timeData[0];
  const minutes = timeData[1];

  timeWord += hourWord[hour];

  if (minutes === '00') {
    timeWord += " o'clock"; 
  } else if (parseInt(minutes) === 15) {
    timeWord = "quarter past " + timeWord;
  } else if (parseInt(minutes) === 30) {
    timeWord = "half past " + timeWord;
  } else if (parseInt(minutes) < 30) {
    timeWord = hourWord[minutes] + " past " + timeWord;
  } else if (parseInt(minutes) === 45) {
    timeWord = "quarter to " + hourWord[parseInt(hour)+1];
  } else if (parseInt(minutes) > 30) {
    timeWord = hourWord[(60 - parseInt(minutes))] + " to " + hourWord[parseInt(hour)+1];
  }

  return timeWord;
}

module.exports = { convertTimeToWords };