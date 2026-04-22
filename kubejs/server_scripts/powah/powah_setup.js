ServerEvents.recipes(event => {

    // 1. Modifier la Pâte Diélectrique (Dielectric Paste)
    event.remove({ output: 'powah:dielectric_paste' })
    event.shapeless('16x powah:dielectric_paste', [
        'minecraft:clay_ball',
        '#forge:dyes/black',
        'mekanism:dust_coal',
        'minecraft:water_bucket'
    ]).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')

    // 2. Le Dielectric Casing 
    event.remove({ output: 'powah:dielectric_casing' })
    event.shaped('2x powah:dielectric_casing', [
        'SPS',
        'PCP',
        'SPS'
    ], {
        S: 'immersiveengineering:plate_steel',    
        P: 'powah:dielectric_paste',               
        C: 'immersiveengineering:component_iron'   
    })

    // 3. Verrouiller le Thermo Generator (Starter)
    event.remove({ output: 'powah:thermo_generator_starter' })
    event.shaped('powah:thermo_generator_starter', [
        'RGR',
        'RCR',
        'SSS'
    ], {
        R: 'immersiveengineering:slag_glass',       
        G: '#forge:glass',
        C: 'powah:dielectric_casing',
        S: 'immersiveengineering:plate_steel'
    })

    // 4. Energized Steel (Via l'Energizing Orb)
    event.remove({ output: 'powah:steel_energized' })
    event.recipes.powah.energizing(
        ['immersiveengineering:ingot_steel', 'minecraft:gold_ingot'], 
        '2x powah:steel_energized', 
        10000
    )

    console.log('--- [PROJET] Powah Age 2 : Setup initial + Energized Steel chargé ! ---')
})