ServerEvents.recipes(event => {

    // --- VARIABLES ---
    const MEKA_ALLOY = 'mekanism:alloy_reinforced' 
    const SOURCE_GEM = 'ars_nouveau:source_gem'
    const FIERY_BLOOD = 'twilightforest:fiery_blood'
    const RESONARIUM = 'deeperdarker:resonarium'
    const RESONARIUM_PLATE = 'deeperdarker:resonarium_plate'

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

    // --- 3. BEYOND EARTH (NASA Workbench) ---
    event.remove({ output: 'beyond_earth:nasa_workbench' })
    event.shaped('beyond_earth:nasa_workbench', [
        'SSS',
        'LCL',
        'LTL'
    ], {
        S: RESONARIUM,
        L: 'twilightforest:lich_trophy', 
        C: 'mekanism:ultimate_control_circuit',
        T: 'minecraft:crafting_table'
    })

    // --- 4. LA FUSÉE T1 ---
    event.remove({ output: 'beyond_earth:rocket' })
    event.shaped('beyond_earth:rocket', [
        '  N  ',
        ' PPP ',
        ' PPP ',
        'A F A'
    ], {
        N: 'beyond_earth:rocket_nose_cone',
        P: RESONARIUM_PLATE,
        A: 'beyond_earth:rocket_fin',
        F: 'beyond_earth:engine_frame' 
    })
})