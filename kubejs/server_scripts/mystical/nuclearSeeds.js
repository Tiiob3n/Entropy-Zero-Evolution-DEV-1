ServerEvents.recipes(event => {

    const INSANIUM_SOIL = 'mysticalagriculture:insanium_farmland'
    const SEED_BASE = 'mysticalagriculture:prosperity_seed_base'

    // --- NETTOYAGE DES DOUBLONS ---
    event.remove({ output: 'mekanism:pellet_polonium', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'mekanism:pellet_plutonium', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'mekanism:pellet_antimatter', type: 'minecraft:crafting_shaped' })

    // ========================================================================
    // --- 1. INFUSION DES GRAINES (ALTAR) ---
    // ========================================================================

    const addInfusion = (seed, pellet, alloy, id) => {
        event.custom({
            type: 'mysticalagriculture:infusion',
            input: { item: SEED_BASE },
            ingredients: [
                { item: pellet }, { item: alloy },
                { item: pellet }, { item: alloy },
                { item: pellet }, { item: alloy },
                { item: pellet }, { item: alloy }
            ],
            result: { item: seed }
        }).id(`entropy:infusion_${id}`)
    }

    addInfusion('entropy:polonium_seeds', 'mekanism:pellet_polonium', 'evolvedmekanism:alloy_hypercharged', 'polonium')
    addInfusion('entropy:plutonium_seeds', 'mekanism:pellet_plutonium', 'evolvedmekanism:alloy_subatomic', 'plutonium')
    addInfusion('entropy:antimatter_seeds', 'mekanism:pellet_antimatter', 'evolvedmekanism:alloy_exoversal', 'antimatter')
    addInfusion('entropy:unobtainium_seeds', 'allthemodium:allthemodium_ingot', 'mysticalagradditions:insanium_essence', 'allthemodium')
    addInfusion('entropy:vibranium_seeds', 'allthemodium:vibranium_ingot', 'mysticalagradditions:insanium_essence', 'vibranium')
    addInfusion('entropy:allthemodium_seeds', 'allthemodium:unobtainium_ingot', 'mysticalagradditions:insanium_essence', 'unobtainium')
    // ========================================================================
    // --- 2. AUTOMATISATION (PHYTOGENIC INSOLATOR - THERMAL) ---
    // ========================================================================
    
    const setupInsolator = (seed, essence) => {
        event.custom({
            type: "thermal:insolator",
            ingredient: { item: seed },
            result: [
                { item: essence, count: 1 },         
                { item: seed, count: 1, chance: 1.0 } 
            ],
            energy: 25000,
            water_modifier: 1.0
        }).id(`entropy:phyto_${essence.split(':')[1]}`)
    }

    setupInsolator('entropy:polonium_seeds', 'entropy:polonium_essence')
    setupInsolator('entropy:plutonium_seeds', 'entropy:plutonium_essence')
    setupInsolator('entropy:antimatter_seeds', 'entropy:antimatter_essence')
    setupInsolator('entropy:unobtainium_seeds', 'entropy:unobtainium_essence')
    setupInsolator('entropy:vibranium_seeds', 'entropy:vibranium_essence')
    setupInsolator('entropy:allthemodium_seeds', 'entropy:allthemodium_essence')

    // ========================================================================
    // --- 3. AUTOMATISATION (GARDEN CLOCHE - IE) ---
    // ========================================================================
    
    const addCloche = (seed, essence) => {
        event.custom({
            type: "immersiveengineering:cloche",
            results: [{ item: essence, count: 1 }],
            input: { item: seed },
            soil: { item: INSANIUM_SOIL },
            time: 600,
            render: { type: "generic", block: "minecraft:wheat" }
        }).id(`entropy:cloche_${essence.split(':')[1]}`)
    }

    addCloche('entropy:polonium_seeds', 'entropy:polonium_essence')
    addCloche('entropy:plutonium_seeds', 'entropy:plutonium_essence')
    addCloche('entropy:antimatter_seeds', 'entropy:antimatter_essence')
    addCloche('entropy:unobtainium_seeds', 'entropy:unobtainium_essence')
    addCloche('entropy:vibranium_seeds', 'entropy:vibranium_essence')
    addCloche('entropy:allthemodium_seeds', 'entropy:allthemodium_essence')

    // ========================================================================
    // --- 4. CONVERSION ESSENCE -> PELLETS ---
    // ========================================================================

    event.shaped('mekanism:pellet_polonium', ['EEE','EEE','EEE'], { E: 'entropy:polonium_essence' }).id('entropy:pellet_polo_fixed')
    event.shaped('mekanism:pellet_plutonium', ['EEE','EEE','EEE'], { E: 'entropy:plutonium_essence' }).id('entropy:pellet_pluto_fixed')
    event.shaped('mekanism:pellet_antimatter', ['EEE','EEE','EEE'], { E: 'entropy:antimatter_essence' }).id('entropy:pellet_anti_fixed')
    event.shaped('allthemodium:unobtainium_ingot', ['EEE','EEE','EEE'], { E: 'entropy:unobtainium_essence' }).id('entropy:ingot_uno_fixed')
    event.shaped('allthemodium:vibranium_ingot', ['EEE','EEE','EEE'], { E: 'entropy:vibranium_essence' }).id('entropy:ingot_vib_fixed')
    event.shaped('allthemodium:allthemodium_ingot', ['EEE','EEE','EEE'], { E: 'entropy:allthemodium_essence' }).id('entropy:ingot_all_fixed') 
})

// ========================================================================
// --- 5. TAGS (REQUIS) ---
// ========================================================================

ServerEvents.tags('item', event => {
    const nuclearSeeds = ['entropy:polonium_seeds', 'entropy:plutonium_seeds', 'entropy:antimatter_seeds', 'entropy:unobtainium_seeds', 'entropy:vibranium_seeds', 'entropy:allthemodium_seeds']
    event.add('mysticalagriculture:seeds', nuclearSeeds)
    event.add('forge:seeds', nuclearSeeds)
})