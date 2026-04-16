ServerEvents.recipes(event => {

    // --- VARIABLES ---
    const MEKA_ALLOY = 'mekanism:alloy_reinforced' 
    const SOURCE_GEM = 'ars_nouveau:source_gem'
    const FIERY_BLOOD = 'twilightforest:fiery_blood'
    const RESONARIUM = 'deeperdarker:resonarium'
    const RESONARIUM_PLATE = 'deeperdarker:resonarium_plate'
    
    // Matériaux pour les paliers supérieurs
    const DESH_PLATE = 'ad_astra:desh_plate'         // Lune
    const OSTRICH_PLATE = 'ad_astra:ostrum_plate'     // Mars 
    const CALORITE_PLATE = 'ad_astra:calorite_plate' // Vénus
    const NITRO = 'powah:crystal_nitro'

    // --- 1. ARS NOUVEAU ---
    event.remove({ output: 'ars_nouveau:novice_spell_book' })
    event.shaped('ars_nouveau:novice_spell_book', [
        'ASA',
        'LBL',
        'ASA'
    ], {
        A: MEKA_ALLOY,
        S: SOURCE_GEM,
        L: 'minecraft:leather',
        B: 'minecraft:book'
    })

    // --- 2. DEEPER AND DARKER (Accès) ---
    event.remove({ output: 'deeperdarker:heart_of_the_deep' })
    event.shaped('deeperdarker:heart_of_the_deep', [
        ' E ',
        'EHE',
        ' E '
    ], {
        E: 'minecraft:echo_shard',
        H: FIERY_BLOOD
    })

    // --- 3. AD ASTRA (Structure & Nettoyage) ---
    event.remove({ output: 'ad_astra:nasa_workbench' })
    event.shaped('ad_astra:nasa_workbench', [
        'SSS',
        'LCL',
        'LTL'
    ], {
        S: RESONARIUM,
        L: 'twilightforest:lich_trophy', 
        C: 'mekanism:ultimate_control_circuit',
        T: 'minecraft:crafting_table'
    })

    // --- 4. FUSÉES (CREATE MECHANICAL CRAFTING) ---
    
    const rockets = [
        'ad_astra:tier_1_rocket', 
        'ad_astra:tier_2_rocket', 
        'ad_astra:tier_3_rocket', 
        'ad_astra:tier_4_rocket'
    ]
    rockets.forEach(id => event.remove({ output: id }))
    event.remove({ type: 'ad_astra:nasa_workbench' })

    // FUSÉE TIER 1 (Objectif : Lune)
    event.recipes.create.mechanical_crafting('ad_astra:tier_1_rocket', [
        '  N  ',
        ' PPP ',
        ' PPP ',
        ' PFP ',
        'A   A'
    ], {
        N: 'ad_astra:rocket_nose_cone',
        P: RESONARIUM_PLATE, 
        A: 'ad_astra:rocket_fin',
        F: 'ad_astra:engine_frame'
    })

    // FUSÉE TIER 2 (Objectif : Mars)
    event.recipes.create.mechanical_crafting('ad_astra:tier_2_rocket', [
        '  N  ',
        ' HCH ',
        ' PPP ',
        ' PFP ',
        'A E A'
    ], {
        N: 'ad_astra:rocket_nose_cone',
        H: 'immersiveengineering:heavy_engineering',
        C: 'powah:dielectric_casing',
        P: DESH_PLATE,
        A: 'ad_astra:rocket_fin',
        F: 'ad_astra:engine_frame',
        E: 'ad_astra:steel_engine'
    })

    // FUSÉE TIER 3 (Objectif : Vénus)
    event.recipes.create.mechanical_crafting('ad_astra:tier_3_rocket', [
        '  N  ',
        ' RSR ',
        ' PPP ',
        ' PFP ',
        'A E A'
    ], {
        N: 'ad_astra:rocket_nose_cone',
        R: 'mekanism:alloy_reinforced',
        S: 'powah:capacitor_niotic',
        P: OSTRICH_PLATE,
        A: 'ad_astra:rocket_fin',
        F: 'ad_astra:engine_frame',
        E: 'ad_astra:desh_engine'
    })

    // FUSÉE TIER 4 (Objectif : Glacio)
    event.recipes.create.mechanical_crafting('ad_astra:tier_4_rocket', [
        '  N  ',
        ' TAT ',
        ' PPP ',
        ' PFP ',
        'A E A'
    ], {
        N: 'ad_astra:rocket_nose_cone',
        T: NITRO,
        A: 'mekanism:alloy_atomic',
        P: CALORITE_PLATE,
        A: 'ad_astra:rocket_fin',
        F: 'ad_astra:engine_frame',
        E: 'ad_astra:ostrum_engine'
    })
})