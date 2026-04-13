ServerEvents.recipes(event => {
event.remove({ output: 'mob_grinding_utils:saw' })
    event.shaped('mob_grinding_utils:saw', [
        'LSL',
        'XCX',
        'LSL'
    ], {
        L: 'create:propeller',
        S: 'minecraft:iron_sword',
        X: 'xycraft_world:xychorium_gem_blue',
        C: 'create:brass_casing'
    })

})