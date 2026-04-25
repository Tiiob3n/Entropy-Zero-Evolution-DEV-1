ServerEvents.recipes(event => {

    // --- CHANGEMENT DU CRAFT DE LA CLOCHE  ---
    event.remove({ output: 'immersiveengineering:cloche' })
    
    event.shaped('immersiveengineering:cloche', [
        'GLG', 
        'G G', 
        'SCS'  
    ], {
        G: '#forge:glass',
        L: 'immersiveengineering:light_engineering',
        S: '#forge:plates/steel',
        C: 'powah:dielectric_casing'
    })

        // event.recipes.immersiveengineering.cloche(['mysticalagriculture:iron_essence'], 'mysticalagriculture:iron_seeds', 'minecraft:dirt', 'mysticalagriculture:iron_crop').time(600)

    console.log('--- Scripts Age 2 : Garden Cloche & Mystical Agriculture chargés ! ---')
})