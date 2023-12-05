const fetch = require('node-fetch');

async function getIPDetails() {
  try {
    const response = await fetch('https://www.myip.com/api-docs/n');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching IP details:', error);
  }
}

getIPDetails();


async function printWordMeanings() {
  try {
    const words = await readFile('words.json');
    words.forEach((wordData) => {
      console.log(`Word: ${wordData.word}`);
      console.log(`Meaning: ${wordData.meaning}`);
      console.log('---');
    });
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

printWordMeanings();
