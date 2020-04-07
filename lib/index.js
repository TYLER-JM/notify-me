
const notifier = require('node-notifier');
const path = require('path');
const pass = require('./timeTracker');


exports.notify = (ms) => {

  let tense = 'are';
  let plurality = 'minutes'

  if (ms === 1) {
    tense = 'is';
    plurality = 'minute';
  }
  
  const details = {
    title: 'Break Time!',
    message: `Your ${ms} ${plurality} ${tense} up!`,
    icon: path.join(__dirname, 'watch.png'),
    sound: 'Submarine',
    closeLabel: undefined,
    actions: 'Close'
  }

  console.log(`Timer set for ${ms} ${plurality}...`);
  
  const trackTime = pass.theTime(ms * 60 * 1000);

  setTimeout(() => {
    notifier.notify(details);
    clearInterval(trackTime);
    console.log(pass.theTime());
  }, ms * 60 * 1000);

}
