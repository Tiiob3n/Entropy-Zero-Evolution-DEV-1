ServerEvents.recipes(event => {

    event.remove({ output: 'mysticalagriculture:infusion_altar' })
    event.shaped('mysticalagriculture:infusion_altar', [
        ' E ',
        'SCS',
        'SSS'
    ], {
        E: 'powah:steel_energized',            
        S: 'minecraft:polished_deepslate', 
        C: 'minecraft:gold_block'              
    })
    event.remove({ output: 'mysticalagriculture:infusion_pedestal' })
    event.shaped('mysticalagriculture:infusion_pedestal', [
        ' Q ',
        ' D ',
        'DDD'
    ], {
        Q: 'minecraft:amethyst_shard',
        D: 'minecraft:polished_deepslate'
    })
    event.remove({ output: 'mysticalagriculture:master_infusion_crystal' })
})