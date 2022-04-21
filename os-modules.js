// os modules
const os = require('os');
    const user = os.userInfo();

    console.log(user);

// method return system uptime in seconds
console.log(`The system uptime is : ${os.uptime()} in seconds` );

