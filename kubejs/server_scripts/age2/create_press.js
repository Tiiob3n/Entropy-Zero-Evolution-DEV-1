ServerEvents.recipes(event => {

    // --- 1. SUPPRESSIONS GLOBALES ---
    const toRemove = [
        'create:andesite_alloy',
        'create:belt_connector',
        'create:goggles',
        'tiab:time_in_a_bottle'
    ]
    toRemove.forEach(id => event.remove({ output: id }))
    
    event.remove({ output: '#forge:plates' })
    event.remove({ input: '#alltheores:ore_hammers' })

    // --- 2. SYSTÈME DE PLAQUES UNIFIÉ ---
    // le métal | le Tag d'entrée | l'Item de sortie
    const plateUnification = [
        { name: 'iron', input: '#forge:ingots/iron', out: 'alltheores:iron_plate' },
        { name: 'gold', input: '#forge:ingots/gold', out: 'alltheores:gold_plate' },
        { name: 'copper', input: '#forge:ingots/copper', out: 'alltheores:copper_plate' },
        { name: 'zinc', input: '#forge:ingots/zinc', out: 'alltheores:zinc_plate' },
        { name: 'brass', input: '#forge:ingots/brass', out: 'create:brass_sheet' },
        { name: 'steel', input: '#forge:ingots/steel', out: 'immersiveengineering:plate_steel' },
        { name: 'bronze', input: '#forge:ingots/bronze', out: 'alltheores:bronze_plate' },
        { name: 'lead', input: '#forge:ingots/lead', out: 'alltheores:lead_plate' },
        { name: 'tin', input: '#forge:ingots/tin', out: 'alltheores:tin_plate' },
        { name: 'silver', input: '#forge:ingots/silver', out: 'alltheores:silver_plate' },
        { name: 'nickel', input: '#forge:ingots/nickel', out: 'alltheores:nickel_plate' },
        { name: 'aluminum', input: '#forge:ingots/aluminum', out: 'alltheores:aluminum_plate' },
        { name: 'uranium', input: '#forge:ingots/uranium', out: 'alltheores:uranium_plate' },
        { name: 'osmium', input: '#forge:ingots/osmium', out: 'alltheores:osmium_plate' },
        { name: 'platinum', input: '#forge:ingots/platinum', out: 'alltheores:platinum_plate' },
        { name: 'allthemodium', input: 'allthemodium:allthemodium_ingot', out: 'allthemodium:allthemodium_plate' },
        { name: 'vibranium', input: 'allthemodium:vibranium_ingot', out: 'allthemodium:vibranium_plate' },
        { name: 'unobtainium', input: 'allthemodium:unobtainium_ingot', out: 'allthemodium:unobtainium_plate' }
    ]

    plateUnification.forEach(p => {
        // Recette Presse CREATE 
        event.recipes.create.pressing(p.out, p.input).id(`entropy:create/pressing/${p.name}`)

        // Recette Presse IMMERSIVE ENGINEERING
        event.custom({
            type: "immersiveengineering:metal_press",
            mold: "immersiveengineering:mold_plate",
            result: { item: p.out },
            input: p.input.startsWith('#') ? { tag: p.input.replace('#', '') } : { item: p.input },
            energy: 2400
        }).id(`entropy:ie/pressing/${p.name}`)
    })

    // --- 3. CRAFTS DE BASE & COMPOSANTS ---

    // Andesite Alloy
    event.shapeless('2x create:andesite_alloy', ['minecraft:andesite', 'minecraft:flint']).id('entropy:andesite_alloy_flint')

    // Belt Connector
    event.recipes.create.pressing('create:belt_connector', 'minecraft:dried_kelp').id('entropy:belt_manual')

    // Acier Manuel (Hammer + Ingot)
    event.shapeless('immersiveengineering:plate_steel', [
        '#forge:ingots/steel',
        'immersiveengineering:hammer'
    ]).damageIngredient('immersiveengineering:hammer').id('entropy:steel_plate_manual')

    // --- 4. CRAFTS AVANCÉS (SHAPED & MECHANICAL) ---

    // Goggles 
    event.shaped('create:goggles', [
        ' T ', 
        'GPG', 
        ' S ' 
    ], {
        T: 'create:electron_tube',
        G: 'minecraft:glass',
        P: 'create:precision_mechanism',
        S: '#forge:plates/gold' 
    }).id('entropy:create_goggles')

    // Time In A Bottle
    event.recipes.create.mechanical_crafting('tiab:time_in_a_bottle', [
        'S N S',
        'S G S',
        'SMMMS',
        'SMTMS',
        'SSSSS'
    ], {
        N: 'powah:crystal_nitro',
        G: 'create:goggles',
        M: 'create:precision_mechanism',
        S: '#forge:plates/brass',
        T: 'minecraft:nether_star'
    }).id('entropy:mechanical/tiab')

})