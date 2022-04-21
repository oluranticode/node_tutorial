const h = require('lodash');

    const items = [1, [2, [3, 4, 5]]];

    const newItems = h.flattenDeep(items);
    console.log(newItems);