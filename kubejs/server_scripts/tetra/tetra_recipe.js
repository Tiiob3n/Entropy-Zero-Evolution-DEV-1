ServerEvents.recipes(event => {

    event.replaceInput(
        { output: 'tetra:modular_double' }, 
        'minecraft:stick',                  
        'alltheores:bronze_rod'             
    )

    // --- XYCRAFT : PREMIÈRE ÉTAPE ---
    // Broyage des gemmes
    event.recipes.create.milling('4x xycraft_world:xychorium_dust_blue', 'xycraft_world:xychorium_gem_blue')

})