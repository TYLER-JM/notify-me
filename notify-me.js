const notifier = require('node-notifier');
const path = require('path');

const mins = parseFloat(process.argv[2], 10);

const details = {
  title: 'Break Time!',
  message: `Your ${mins} minutes are up!`,
  icon: path.join(__dirname, 'watch.png'),
  sound: 'Submarine',
  closeLabel: undefined,
  actions: 'Close'
}

setTimeout(() => {
  notifier.notify(details);
}, mins * 1000 * 60);