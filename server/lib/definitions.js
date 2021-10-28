//gun stats
//array function

//The function that I made doesn't even work, so we'll use this
const combineStats = function(arr) {
    try {
    // Build a blank array of the appropiate length
    let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    arr.forEach(function(component) {
        for (let i=0; i<data.length; i++) {
            data[i] = data[i] * component[i];
        }
    });
    return {
        reload: data[0],
        damage: data[1],
        health: data[2], 
        pen: data[3],
        speed: data[4],
        range: data[5],
        spray: data[6],
        shutter: data[7],
        size: data[8],
        density: data[9],
        resist: data[10],
    };
    } catch(err) {
        console.log(err);
        console.log(JSON.stringify(arr));
    }
};
//tick rates at roomspeed Hz
/**gstats:
  Reload: time before barrels can cycle up, in seconds
  Damage: the damage the entity does
  Health: health that the entity has
  Pen: the amount of units an entity can go through per tick
  Speed: distance that an entity can travel per tick, measured in grids
  Range: max distance an entity can travel before despawning
  Spray: direction inaccuracy, measured in degrees
  Shutter: speed inaccuracy, measured in percents
  Density: WIP
  Resist: WIP
*/
const g = {//reload, damage, health, pen, speed, range, spray, shutter, size, density, resist
    blank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    basic: [0.9, 1, 1, 1, 0.1, 16, 1, 0.2, 1, 15, 8],
};
const base = {
    health: 50, 
    damage: 1, 
    speed: 1,
    fov: 35, 
    pen: 1, 
    danger: 5, 
    accel: 1, 
    
};
exports.genericEntity = {
    Label: 'Unknown Entity', 
    Team: 'null', 
    Size: 0, 
    Shape: 0, 
    Color: 0, 
    Controllers: ['kickUnlessDev'], //make sure no players are accidently exports.genericEntity
    Stats: [0, 0, 0, 0, 0, 0, 0, 0],
    Attributes: ['drawHealth'], 
    Value: 0, 
    Movement: 'glide', 
    Facing: 'toTarget', 
    Collision: 'never', 
    Invisibility: [0, 0], //time, transparency
    Necro: ['null'], 
    Effects: {
        Type: null, 
        Time: 0, 
        Strength: 0,
        Resist: ["none"],
    },
    Body: {
        Health: 1, 
        Damage: 0, 
        Speed: 0, 
        Fov: 1, 
        Pen: 100, 
        Danger: -1, 
        Accel: 0, 
        Regen: 1, 
    },
    Guns: [], 
    Turrets: [], 
    Food: {
        Type: 'null', 
        Class: 'null', 
        Evolve: ['null'], 
        Time: 0, 
    },
    Upgrades_1: [], 
    Upgrades_2: [], 
    Upgrades_3: [], 
    Upgrades_Special: [],
};
exports.food = {
    Parent: [exports.genericEntity],
    Movement: 'moveInCirles', 
    Facing: 'turnWithSpeed',
    Controllers: ['protectTeammates'],
    Attributes: ['drawHealth', 'variesInSize', 'acceptsScore'], 
    Collision: 'hard', 
    Body: {
        Pen: 2, 
        Accel: 1, 
        Regen: 4, 
    },
};
/** Colors
  0 background
  1 background grid
  2 gray
  3 tank blue
  4 tank red 
  5 tank green
  6 tank purple
  7 dark gray
  8 white
  9 black
  10 square
  11 triangle
  12 pentagon
  13 hexagon
  14 heptagon
  15 octogon
  16 nonagon
  17 decagon
  */
exports.square = {
    Parent: [exports.food], 
    Label: 'Square', 
    Team: 'square', 
    Size: 8,
    Shape: 4, 
    Color: 10, 
    Body: {
        Health: 10, 
        Damage: 4, 
        Fov: 20, 
        Danger: 1, 
    },
    Food: {
        Type: 'freq',
        Class: 'square', 
    },
};
exports.triangle = {
    Parent: [exports.food], 
    Label: 'Triangle', 
    Team: 'triangle', 
    Size: 9,
    Shape: 3, 
    Color: 11, 
    Body: {
        Health: 30, 
        Damage: 8, 
        Fov: 20, 
        Danger: 2, 
    },
    Food: {
        Type: 'freq',
        Class: 'triangle',
        Evolve: ['exports.square']
    },
};
exports.pentagon = {
    Parent: [exports.food], 
    Label: 'Pentagon', 
    Team: 'pentagon', 
    Size: 12,
    Shape: 5, 
    Color: 12, 
    Body: {
        Health: 100, 
        Damage: 12, 
        Fov: 20, 
        Danger: 2, 
    },
    Food: {
        Type: 'freq',
        Class: 'pentagon',
        Evolve: ['exports.triangle']
    },
};
exports.bullet = {
    Parent: [exports.genericEntity], 
    Label: 'Bullet', 
    Team: 'master', 
    Size: 1, 
    Shape: 0, 
    Color: 'master', 
    Controllers: [], //make sure we don't accidently kick every single bullet
    Attributes: ['goOutsideRoom'], 
    Body: {
        Health: 1, 
        Damage: 1, 
    },
};
exports.drone = {
    Parent: [exports.bullet], 
    Label: 'Drone', 
    Shape: 3, 
    Controllers: ['nearestDifferentMaster', 'hangOutWithMaster', 'canRepel'], 
    Collision: 'hardWithMasterChildren', 
    Attributes: [], 
    Body: {
        Health: 2, 
        Damage: 3, 
    },
};
exports.genericTank = {
    Parent: [exports.genericEntity],
    Label: 'Unknown Class', 
    Team: 'tank', 
    Size: 15, 
    Shape: 0, 
    Color: 'Tank', 
    Controllers: ['player'], 
    Stats: [0, 0, 0, 0, 0, 0, 0, 0],
    Attributes: ['drawHealth', 'acceptsScore'], 
    Value: 0, 
    Movement: 'motor', 
    Facing: 'toTarget', 
    Collision: 'hardWithTeam', 
    Body: {//default
        Health: base.health, 
        Damage: base.damage, 
        Speed: base.speed, 
        Fov: base.fov, 
        Pen: base.pen, 
        Danger: base.danger, 
        Accel: base.accel, 
        Regen: base.regen, 
    },
};
exports.autoturret = {
    Parent: [exports.genericTank],
    Label: "Auto-Turret", 
    Size: 7, 
    Color: 2, 
    Controllers: ['nearestDifferentMaster', 'onlyAcceptInArc', 'independent'],
    Body: {
        Fov: base.fov * 1.1
    },
    Guns: [{// Length Width X Y Angle Aspect Delay
        Position: [8, 7, 6, 0, 0, 1, 0], 
            Properties: {
                Type: exports.bullet, 
                Stats: combineStats([g.basic, g.autoturret]),
            }, }, ],
};
exports.smashshell = {
    Parent: [exports.genericEntity], 
    Size: 15, 
    Shape: 6, 
    Color: 9, 
    Controllers: ['spin'],
};

function makeAuto(type, name, options = {}) {
    let turret = {
        type: exports.autoTurret, 
        size: 7.5
    };
    if (options.type != null) {
        turret.type = options.type;
    }
    if (options.size != null) {
        turret.size = options.size;
    }
    let output = JSON.parse(JSON.stringify(type));
    let auto = {
        Position: [7.5, 0, 0, 180, 360], 
            Properties: {
                Type: exports.autoturret, 
                Layer: 'Top'
            },
        };
    if (type.Guns != null) {
        output.Guns = type.Guns;
    }
    if (type.Turrets == null) {
        output.Turrets = [auto];
    } else {
        output.Turrets = [...type.Turrets, auto]; 
    }
    if (name == null) {
        output.Label = 'Auto-' + type.Label;
    } else {
        output.Label = name;
    }
    output.Body.Danger = type.Body.Danger + 1;
    return output;
}
function makeHybrid(type, name) {
    let output = JSON.parse(JSON.stringify(type));
    let spawner = { 
        Position: [5, 7, 6, 0, 180, 1.5, 0.2], 
            Properties: {
                Type: exports.drone, 
                Stats: combineStats([g.basic, g.drone, g.meta]), 
                AutoFire: true, 
                Max: 3
                },
        };
    if (type.TURRETS != null) {
        output.TURRETS = type.TURRETS;
    }
    if (type.GUNS == null) {
        output.GUNS = [spawner];
    } else {
        output.GUNS = [...type.GUNS, spawner];
    }
    if (name == -1) {
        output.LABEL = 'Hybrid ' + type.LABEL;
    } else {
        output.LABEL = name;
    }
    return output;
}
function makeCeption(type, name, options = {}) {
    let turret = {
        type: exports.autoTurret, 
        size: 7.5
    };
    if (options.type != null) {
        turret.type = options.type;
    }
    if (options.size != null) {
        turret.size = options.size;
    }
    let output = JSON.parse(JSON.stringify(type));
    let auto = {
        Position: [options.size, 0, 0, 180, 360], 
            Properties: {
                Type: options.type, 
                Layer: 'Top'
            },
        };
    if (type.Guns != null) {
        output.Guns = type.Guns;
    }
    if (type.Turrets == null) {
        output.Turrets = [auto];
    } else {
        output.Turrets = [...type.Turrets, auto]; 
    }
    if (name == null) {
        output.Label = type.Label + "ception";
    } else {
        output.Label = name;
    }
    output.Body.Danger = type.Body.Danger + 1;
    return output;
}
exports.basic = {
    Parent: [exports.genericTank], 
    Label: 'Basic', 
    Guns: [{// Length Width X Y Angle Aspect Delay
        Position: [9, 6, 6, 0, 0, 1, 0], 
            Properties: {//default
                Type: exports.bullet, 
                Stats: combineStats([g.basic]), 
                Alt: false, 
                OnDeath: false, 
                Max: null, 
                AutoFire: false, 
                SyncStats: true, 
                IsLance: false, 
                Label: '', 
            }, 
            Color: {//default
                Border: true, 
                Color: 2, //accepts hex codes in 00000000 format
            }, }, ], 
}; 
