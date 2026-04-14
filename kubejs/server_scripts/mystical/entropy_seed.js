ServerEvents.recipes(event => {

    const INSANIUM_SOIL = 'mysticalagriculture:insanium_farmland'
    const SEED_BASE = 'mysticalagriculture:prosperity_seed_base'

    // ========================================================================
    // --- 1. INFUSION DES GRAINES (MYSTICAL AGRICULTURE) ---
    // ========================================================================

    // Polonium
    event.custom({
        type: 'mysticalagriculture:infusion',
        input: { item: SEED_BASE },
        ingredients: [
            { item: 'mekanism:pellet_polonium' }, { item: 'evolvedmekanism:alloy_hypercharged' },
            { item: 'mekanism:pellet_polonium' }, { item: 'evolvedmekanism:alloy_hypercharged' },
            { item: 'mekanism:pellet_polonium' }, { item: 'evolvedmekanism:alloy_hypercharged' },
            { item: 'mekanism:pellet_polonium' }, { item: 'evolvedmekanism:alloy_hypercharged' }
        ],
        result: { item: 'entropy:polonium_seeds' }
    })

    // Plutonium
    event.custom({
        type: 'mysticalagriculture:infusion',
        input: { item: SEED_BASE },
        ingredients: [
            { item: 'mekanism:pellet_plutonium' }, { item: 'evolvedmekanism:alloy_subatomic' },
            { item: 'mekanism:pellet_plutonium' }, { item: 'evolvedmekanism:alloy_subatomic' },
            { item: 'mekanism:pellet_plutonium' }, { item: 'evolvedmekanism:alloy_subatomic' },
            { item: 'mekanism:pellet_plutonium' }, { item: 'evolvedmekanism:alloy_subatomic' }
        ],
        result: { item: 'entropy:plutonium_seeds' }
    })

    // Antimatière
    event.custom({
        type: 'mysticalagriculture:infusion',
        input: { item: SEED_BASE },
        ingredients: [
            { item: 'mekanism:pellet_antimatter' }, { item: 'evolvedmekanism:alloy_exoversal' },
            { item: 'mekanism:pellet_antimatter' }, { item: 'evolvedmekanism:alloy_exoversal' },
            { item: 'mekanism:pellet_antimatter' }, { item: 'evolvedmekanism:alloy_exoversal' },
            { item: 'mekanism:pellet_antimatter' }, { item: 'evolvedmekanism:alloy_exoversal' }
        ],
        result: { item: 'entropy:antimatter_seeds' }
    })

    // ========================================================================
    // --- 2. AUTOMATISATION PHYTOGENIC INSOLATOR (THERMAL) ---
    // ========================================================================
    
    const setupInsolator = (seed, essence) => {
        event.custom({
            type: "thermal:insolator",
            ingredient: { item: seed },
            result: [
                { item: essence, count: 1 },         
                { item: seed, count: 1 } 
            ],
            energy: 25000,
            water_modifier: 1.0
        })
    }

    setupInsolator('entropy:polonium_seeds', 'entropy:polonium_essence')
    setupInsolator('entropy:plutonium_seeds', 'entropy:plutonium_essence')
    setupInsolator('entropy:antimatter_seeds', 'entropy:antimatter_essence')

    // ========================================================================
    // --- 3. CONVERSION ESSENCE -> PELLETS ---
    // ========================================================================

    event.shaped('mekanism:pellet_polonium', ['EEE','EEE','EEE'], { E: 'entropy:polonium_essence' })
    event.shaped('mekanism:pellet_plutonium', ['EEE','EEE','EEE'], { E: 'entropy:plutonium_essence' })
    event.shaped('mekanism:pellet_antimatter', ['EEE','EEE','EEE'], { E: 'entropy:antimatter_essence' })
})