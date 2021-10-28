const log = {
    norm: function(message) {console.log(message); }, 
    info: function(message) {console.log('[INFO] '+ message); }, 
    warn: function(message) {console.warn('[WARN]' + message); }, 
    socket: function(message) {console.log('[SOCKET]' + message); }, 
    error: function(message) {console.error('[ERROR]' + message); }, 
    spawn: function(message) {console.log('[SPAWNING]' + message); },
};
let key = {
    up: 87, 
    left: 65, 
    down: 83, 
    right: 68, 
    autoSt: 69, //haha autoshoot funni
    autoSp: 67, 
    arrowU: 38, 
    arrowL: 37, 
    arrowR: 39, 
    arrowD: 40, 
    up1: 49, 
    up2: 50, 
    up3: 51,
    up4: 52, 
    up5: 53, 
    up6: 54, 
    up7: 55,
    up8: 56,
    maxUp: 77, 
    dom: 72,
    upgrade: 89,
    level: 78, 
    form: 81, 
    test: 192, 
    passive: 88, 
    kill: 75, 
    godmode: 71, 
    teleport: 79, 
    drag: 74, 
    spawn: 70, 
    rainbow: 187, 
    basic: 80, 
    invisible: 73, 
    takeover: 90, 
    debug: 76, 
    shoot: 32, 
    alt: 16,
    reverseT: 86, 
    reverseM: 66, 
};
const draw = (() => {
    function drawShape(radius, shape, centerX, centerY) {}
    function drawCustom(size, path) {}
    function drawGun(length, width, x, y, angle, aspect, color, border) {}
})();
let terminal = function(process) {
    process = prompt('Tales of Diep terminal v0.1')
};