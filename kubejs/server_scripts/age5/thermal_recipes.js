ServerEvents.recipes(event => {

    // ==========================================
    // 🚫 SUPPRESSION AGRESSIVE DES CRAFTS MANUELS
    // ==========================================
    
    // Signalum
    event.remove({ output: 'thermal:signalum_ingot', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'thermal:signalum_ingot', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'thermal:signalum_dust' })

    // Enderium
    event.remove({ output: 'thermal:enderium_ingot', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'thermal:enderium_ingot', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'thermal:enderium_dust' })

    // Lumium 
    event.remove({ output: 'thermal:lumium_ingot', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'thermal:lumium_ingot', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'thermal:lumium_dust' })

    // ==========================================
    // 🛠️ CRAFTS EXPERTS
    // ==========================================

    // --- MACHINE FRAME ---
    event.remove({ output: 'thermal:machine_frame' })
    event.shaped('thermal:machine_frame', [
        'IXI',
        'SCS',
        'IXI'
    ], {
        I: 'alltheores:invar_ingot',          
        X: 'xycraft_world:xychorium_gem_light', 
        S: 'minecraft:quartz_block',          
        C: 'create:brass_casing'              
    }).id('entropy:age5/machine_frame_expert')

    // --- LOGISTIQUE PIPEZ ---
    event.remove({ output: 'pipez:item_pipe' })
    event.shaped('16x pipez:item_pipe', [
        'BBB',
        'RXR',
        'BBB'
    ], {
        B: 'alltheores:bronze_ingot',
        R: 'minecraft:redstone',
        X: 'xycraft_world:xychorium_gem_blue'
    }).id('entropy:age5/item_pipe_expert')

    // --- FLUX NETWORKS ---
    event.remove({ output: 'fluxnetworks:flux_dust' })
    event.shapeless('4x fluxnetworks:flux_dust', [
        'minecraft:redstone_block',
        'xycraft_world:xychorium_gem_dark',
        'thermal:quartz_dust',
        'minecraft:obsidian'
    ]).id('entropy:age5/flux_dust_expert')

    event.remove({ output: 'fluxnetworks:flux_core' })
    event.shaped('fluxnetworks:flux_core', [
        'DFD',
        'FMF',
        'DFD'
    ], {
        D: 'fluxnetworks:flux_dust',
        F: 'alltheores:invar_ingot',
        M: 'thermal:machine_frame'
    }).id('entropy:age5/flux_core_expert')

    // --- MYSTICAL AGRICULTURE SEEDS ---
    event.remove({ id: 'mysticalagriculture:seed/infusion/invar' })
    event.shaped('mysticalagriculture:invar_seeds', [
        'LFL',
        'FSF',
        'LFL'
    ], {
        L: 'alltheores:invar_ingot',
        F: 'thermal:machine_frame',
        S: 'mysticalagriculture:prosperity_seed_base'
    }).id('entropy:age5/mystical_invar_expert')

    event.remove({ id: 'mysticalagriculture:seed/infusion/nickel' })
    event.shaped('mysticalagriculture:nickel_seeds', [
        'LFL',
        'FSF',
        'LFL'
    ], {
        L: 'alltheores:nickel_ingot',
        F: 'thermal:machine_frame',
        S: 'mysticalagriculture:prosperity_seed_base'
    }).id('entropy:age5/mystical_nickel_expert')

    // --- THERMAL MACHINES ---
    event.remove({ output: 'thermal:machine_pulverizer' })
    event.shaped('thermal:machine_pulverizer', [
        ' P ',
        'IMI',
        'RGR'
    ], {
        P: 'minecraft:piston',
        I: 'alltheores:invar_ingot',
        M: 'thermal:machine_frame',
        R: 'minecraft:redstone',
        G: 'thermal:invar_gear'
    }).id('entropy:age5/pulverizer_expert')

    event.remove({ output: 'thermal:machine_smelter' })
    event.shaped('thermal:machine_smelter', [
        ' B ',
        'IMI',
        'RCR'
    ], {
        B: 'minecraft:blast_furnace',
        I: 'alltheores:invar_ingot',
        M: 'thermal:machine_frame',
        R: 'minecraft:redstone',
        C: 'thermal:constantan_gear'
    }).id('entropy:age5/smelter_expert')

    event.remove({ output: 'thermal:machine_bottler' })
    event.shaped('thermal:machine_bottler', [
        ' B ',
        'IMI',
        'RER'
    ], {
        B: 'minecraft:glass_bottle',
        I: 'alltheores:invar_ingot',
        M: 'thermal:machine_frame',
        R: 'minecraft:redstone',
        E: 'thermal:constantan_gear'
    }).id('entropy:age5/encapsulator_expert')

    // --- THERMAL UPGRADES ---
    event.remove({ output: 'thermal:upgrade_augment_1' })
    event.shaped('thermal:upgrade_augment_1', [
        'IBI',
        'BXB',
        'IBI'
    ], {
        I: 'alltheores:invar_ingot',
        B: 'alltheores:bronze_ingot',
        X: 'xycraft_world:xychorium_gem_blue'
    }).id('entropy:age5/upgrade_tier_1')

    event.remove({ output: 'thermal:upgrade_augment_2' })
    event.shaped('thermal:upgrade_augment_2', [
        'IEX',
        'EUE',
        'XEI'
    ], {
        I: 'thermal:electrum_ingot',
        E: 'thermal:electrum_gear',
        X: 'xycraft_world:xychorium_gem_green',
        U: 'thermal:upgrade_augment_1' 
    }).id('entropy:age5/upgrade_tier_2')

    event.remove({ output: 'thermal:upgrade_augment_3' })
    event.shaped('thermal:upgrade_augment_3', [
        'SXS',
        'XUX',
        'SXS'
    ], {
        S: 'thermal:signalum_ingot',
        X: 'xycraft_world:xychorium_gem_red',
        U: 'thermal:upgrade_augment_2'
    }).id('entropy:age5/upgrade_tier_3')

    // --- ALLIAGES DE BASE THERMAL (SMELTER ONLY) ---
    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            { item: 'minecraft:copper_ingot', count: 3 },
            { item: 'alltheores:silver_ingot', count: 1 },
            { item: 'xycraft_world:xychorium_gem_red', count: 1 }
        ],
        result: [{ item: 'thermal:signalum_ingot', count: 4 }],
        energy: 15000
    }).id('entropy:age5/smelter_signalum_exclusive')

    event.remove({ id: 'thermal:machines/smelter/smelter_alloy_enderium' })
    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            { item: 'alltheores:lead_ingot', count: 3 },
            { item: 'xycraft_world:xychorium_gem_dark', count: 1 },
            { item: 'minecraft:ender_pearl', count: 2 }
        ],
        result: [{ item: 'thermal:enderium_ingot', count: 4 }],
        energy: 25000
    }).id('entropy:age5/smelter_enderium_exclusive')

    // --- THERMAL ENDERGY ALLOYS & UPGRADES ---
    event.remove({ output: 'thermalendergy:prismalium_ingot' })
    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            { item: 'thermal:enderium_ingot', count: 2 },
            { item: 'xycraft_world:xychorium_gem_light', count: 2 },
            { item: 'minecraft:prismarine_shard', count: 4 }
        ],
        result: [{ item: 'thermalendergy:prismalium_ingot', count: 2 }],
        energy: 30000
    }).id('entropy:age5/smelter_prismalium')

    event.remove({ output: 'thermalendergy:melodium_ingot' })
    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            { item: 'thermalendergy:prismalium_ingot', count: 1 },
            { item: 'xycraft_world:xychorium_gem_dark', count: 1 },
            { item: 'minecraft:chorus_fruit', count: 4 }
        ],
        result: [{ item: 'thermalendergy:melodium_ingot', count: 1 }],
        energy: 45000
    }).id('entropy:age5/smelter_melodium')

    event.remove({ output: 'thermalendergy:stellarium_ingot' })
    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            { item: 'thermalendergy:melodium_ingot', count: 1 },
            { item: 'xycraft_world:xychorium_gem_red', count: 2 },
            { item: 'minecraft:nether_star', count: 1 }
        ],
        result: [{ item: 'thermalendergy:stellarium_ingot', count: 1 }],
        energy: 100000
    }).id('entropy:age5/smelter_stellarium')

    // --- ALLOY CLEANUP ---
    event.remove({ output: 'thermal:invar_ingot', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'thermal:electrum_ingot', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'thermal:invar_dust' })
    event.remove({ output: 'thermal:electrum_dust' })

})