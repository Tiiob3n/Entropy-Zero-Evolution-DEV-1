ServerEvents.recipes(event => {

    // --- RUNE DE FEU---
    event.remove({ output: 'botania:rune_fire' })
    event.recipes.botania.runic_altar('botania:rune_fire', [
        'minecraft:nether_wart',
        'minecraft:gunpowder',
        'botania:mana_diamond',
        'botania:red_petal',
        'botania:red_petal',
        'botania:orange_petal',
        'botania:orange_petal',
        'deeperdarker:resonarium' // Ajout d'une touche d'Âge 7
    ], 8000)

    // --- RUNE DE TERRE---
    event.remove({ output: 'botania:rune_earth' })
    event.recipes.botania.runic_altar('botania:rune_earth', [
        'minecraft:stone',
        'minecraft:mushroom_stew',
        'botania:mana_diamond',
        'botania:brown_petal',
        'botania:brown_petal',
        'botania:green_petal',
        'botania:green_petal',
        'deeperdarker:resonarium'
    ], 8000)

    // --- RUNE d'AIR ---
    event.remove({ output: 'botania:rune_air' })
    event.recipes.botania.runic_altar('botania:rune_air', [
        'minecraft:feather',
        'minecraft:string',
        'botania:mana_diamond',
        'botania:white_petal',
        'botania:white_petal',
        'botania:light_blue_petal',
        'botania:light_blue_petal',
        'deeperdarker:resonarium'
    ], 8000)

    // --- RUNE DE L'ENVIE ---
    event.remove({ output: 'botania:rune_envy' })
    event.recipes.botania.runic_altar('botania:rune_envy', [
        'botania:rune_water',
        'botania:rune_hunger',
        'mekanism:advanced_control_circuit',
        'botania:green_petal',
        'botania:green_petal',
        'botania:black_petal',
        'botania:black_petal',
        'entropy:resonarium_essence' 
    ], 25000)

    // --- RUNE DE L'ORGUEIL ---
    event.remove({ output: 'botania:rune_pride' })
    event.recipes.botania.runic_altar('botania:rune_pride', [
        'botania:rune_fire',
        'botania:rune_air',
        'mekanism:pellet_polonium', 
        'botania:magenta_petal',
        'botania:magenta_petal',
        'botania:pink_petal',
        'botania:pink_petal',
        'entropy:resonarium_essence'
    ], 25000)

    // --- RUNE DE L'HIVER ---
    event.remove({ output: 'botania:rune_winter' })
    event.recipes.botania.runic_altar('botania:rune_winter', [
        'botania:rune_water',
        'botania:rune_earth',
        'minecraft:snow_block',
        'botania:white_petal',
        'botania:white_petal',
        'botania:light_blue_petal',
        'botania:cyan_petal',
        'deeperdarker:resonarium'
    ], 15000)

})