
    const { readFile, writeFile } = require('fs');

    readFile('./content/first.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        console.log(result);

        const first = result;
       
        readFile('./content/second.txt', 'utf8', (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            const second = result;
            console.log(second)
            writeFile('./content/result-async.txt', `hello dear : ${first}, ${second}`, { flag: 'a' }, (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log('done with the programme');
            } );
        });
    });
    console.log('start the programme')
