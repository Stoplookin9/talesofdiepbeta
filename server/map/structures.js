const item = require('./server/map/powerups'),
      def = require('./server/lib/definitions.');
exports.structure = {
    Name: 'Unknown Build',
    Sides: 'neutral',
    Path: [],
    Inside_path: [], 
    Backdrop: [],
    Store: [], 
    Guns: [], 
    Turrets: [], 
    Data: {
        Danger: 0, 
        Health: 1, 
        Repair: 1, 
    },
};
exports.basicshop = {
    Name: 'Basic Shop', 
    Sides: 'tank', 
    Path: [[
        'M 0 0 L 0 1 L 1 1 L 0 0 Z', 'FF000000',
            ], [
        'M 0 0 L -1 0 L -1 -1 L 0 0 Z', 'FF00FF00', 
            ], ], 
    Inside_path: [], 
    Backdrop: [], 
    Store: [{
        Item: item.repair1, 
        Cost: 20, 
        Cost5: 100, 
        Cost20: 400, 
        CostP: 1, 
        }, {
        Item: item.repair2, 
        Cost: 30, 
        Cost5: 150, 
        Cost20: 600, 
        CostP: 2, 
        }, {
        Item: item.statpoint, 
        Cost: 40, 
        Cost5: 200, 
        Cost20: 800, 
        CostP: 2, 
        }, {
        Item: item.shield1, 
        Cost: 30, 
        Cost5: 150, 
        Cost20: 400, 
        CostP: 2, 
        }, ],
    Data: {
        Danger: 1, 
        Health: 500, 
        Repair: 5, 
    },
};