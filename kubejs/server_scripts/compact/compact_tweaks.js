ServerEvents.recipes(event => {
    event.remove({ output: 'compactmachines:wall' })
    event.recipes.create.mechanical_crafting('compactmachines:wall', [
        "CCC",
        "C C",
        "CCC"
    ], {
        C: 'minecraft:polished_deepslate'            
    }).id('entropy:wall/compact_wall_expert')
})

