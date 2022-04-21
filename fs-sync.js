const { readFileSync, writeFileSync } = require('fs');

    const first = readFileSync('./content/first.txt', 'utf-8');
    const second = readFileSync('./content/second.txt', 'utf-8');
    // console.log(first, second);

   const res = writeFileSync('./content/result.txt', `hello dear : ${first}, ${second}`, { flag: 'a' } );
console.log(res);
console.log("life is good ");

