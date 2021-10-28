exports.random = x => Math.random() * x;
exports.iRandom = i => Math.floor(Math.random() * (Math.floor(i) + 1));
exports.randomRange = (min, max) => Math.random() * (max - min) + min;
exports.iRandomRange = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;
exports.randomAngle = () => Math.PI * Math.random() * 2; 
exports.choose = arr => arr[exports.iRandom(arr.length - 1)];
exports.chooseN = (arr, n) => {
    let o = [];
    for (let i=0; i<n; i++) {
        o.push(arr.splice(exports.irandom(arr.length - 1), 1)[0]);
    }; return o;
};
exports.botNames = () => {
    return exports.choose([
        'Alpha',
        'Bravo',
        'Charlie',
        'Delta',
        'Echo',
        'Foxtrot',
        'Hotel',
        'India',
        'Juliet',
        'Kilo',
        'Lima',
        'Mike',
        'November',
        'Oscar',
        'Papa',
        'Quebec',
        'Romeo',
        'Sierra',
        'Tango',
        'Uniform',
        'Victor',
        'Whiskey',
        'X-Ray',
        'Yankee',
        'Zulu',
    ]);
};