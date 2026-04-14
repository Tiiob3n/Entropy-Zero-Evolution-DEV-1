ServerEvents.recipes(event => {

    const INSANIUM_SOIL = 'mysticalagriculture:insanium_farmland'
    const SEED_BASE = 'mysticalagriculture:prosperity_seed_base'

    // ========================================================================
    // --- 1. INFUSION DES GRAINES (MYSTICAL AGRICULTURE) ---
    // ========================================================================

    // Graine de Polonium
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
    }).id('entropy:age6/infusion_polonium_seeds')

    // Graine de Plutonium
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
    }).id('entropy:age6/infusion_plutonium_seeds')

    // Graine d'Antimatière
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
    }).id('entropy:age6/infusion_antimatter_seeds')

    // ========================================================================
    // --- 2. GARDEN CLOCHE (IMMERSIVE ENGINEERING) ---
    // ========================================================================
    
    const addClocheRecipe = (seed, essence, renderBlock) => {
        event.custom({
            type: "immersiveengineering:cloche",
            results: [{ item: essence, count: 1 }],
            input: { item: seed },
            soil: { item: INSANIUM_SOIL },
            time: 600,
            render: { type: "generic", block: renderBlock }
        }).id(`entropy:cloche_auto_${essence.split(':')[1]}`)
    }

    addClocheRecipe('entropy:polonium_seeds', 'entropy:polonium_essence', 'minecraft:wheat')
    addClocheRecipe('entropy:plutonium_seeds', 'entropy:plutonium_essence', 'minecraft:wheat')
    addClocheRecipe('entropy:antimatter_seeds', 'entropy:antimatter_essence', 'minecraft:wheat')

    // ========================================================================
    // --- 3. CONVERSION ESSENCE -> PELLETS ---
    // ========================================================================

    event.shaped('mekanism:pellet_polonium', ['EEE','EEE','EEE'], { E: 'entropy:polonium_essence' }).id('entropy:age6/pellet_polonium_from_essence')
    event.shaped('mekanism:pellet_plutonium', ['EEE','EEE','EEE'], { E: 'entropy:plutonium_essence' }).id('entropy:age6/pellet_plutonium_from_essence')
    event.shaped('mekanism:pellet_antimatter', ['EEE','EEE','EEE'], { E: 'entropy:antimatter_essence' }).id('entropy:age6/pellet_antimatter_from_essence')
})

// ========================================================================
// --- 4. TAGS (REQUIS POUR LA COMPATIBILITÉ CLOCHE) ---
// ========================================================================

ServerEvents.tags('item', event => {
    const nuclearSeeds = [
        'entropy:polonium_seeds', 
        'entropy:plutonium_seeds', 
        'entropy:antimatter_seeds'
    ]
    
    event.add('mysticalagriculture:seeds', nuclearSeeds)
    event.add('forge:seeds', nuclearSeeds)
})