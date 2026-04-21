ServerEvents.recipes(event => {
    event.remove({ id: 'hostilenetworks:loot_fabricator' })
    event.shaped('hostilenetworks:loot_fabricator', [
        ' A ',
        'BDB',
        'CEC'
    ], {
        A: 'create:precision_mechanism',
        B: 'minecraft:diamond',
        C : 'minecraft:netherite_ingot',
        D: 'minecraft:obsidian',
        E : 'minecraft:comparator'
    }).id('entropy:expert/loot_fabricator')

    event.remove({ id: 'hostilenetworks:sim_chamber' })
    event.shaped('hostilenetworks:sim_chamber', [
        ' A ',
        'BDB',
        'CEC'
    ], {
        A: 'create:precision_mechanism',
        B: 'minecraft:ender_pearl',
        C : 'minecraft:lapis_lazuli',
        D: 'minecraft:obsidian',
        E : 'minecraft:comparator'
    }).id('entropy:expert/sim_chamber')
})