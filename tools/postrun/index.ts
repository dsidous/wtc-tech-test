const shell = require('shelljs');
const colors = require('colors');
const figlet = require('figlet');
const openUrl = require('open');

const openUrlInBrowser = async (url) => {
  await openUrl(url);
};

figlet('Welcome to WTC Tech test!!', function (err, data) {
  if (err) return;
  console.log(colors.cyan(data));
});

const child = shell.exec('yarn serve:fe', { async: true });
child.stdout.on('data', function (data) {
  if (data.includes('[ ready ] on http://localhost:4200')) {
    openUrlInBrowser('http://localhost:4200');
  }
});
