ServerEvents.recipes(event => {
    
    const SHARD = 'entropy:primordial_inertia_shard'
    const INF_INGOT = 'avaritia:infinity_ingot'
    const NEUTRONIUM = 'avaritia:neutron_ingot'

    // --- SECTION NETTOYAGE ---
    const toRemove = [
        'avaritia:infinity_ingot',
        'avaritia:infinity_sword',
        'avaritia:infinity_pickaxe',
        'avaritia:infinity_bucket',
        'avaritia:infinity_helmet',
        'avaritia:infinity_chestplate',
        'avaritia:infinity_pants',
        'avaritia:infinity_boots',
        'avaritia:eternal_singularity',
        'pipez:infinity_upgrade',
        'storagedrawers:creative_storage_upgrade',
        'avaritia:upgrade_smithing_template',
        'avaritia:blaze_cube',
        'avaritia:infinity_chest'
    ]

    toRemove.forEach(itemID => {
        event.remove({ output: itemID })
    })

    // --- SECTION CREATE ---

    // Infinity Ingot
    event.recipes.create.mechanical_crafting(INF_INGOT, [
        "NNNNNNNNN",
        "NCCCCCCCN",
        "NCXAXAXCN",
        "NCAXAXACN",
        "NXAXAXAXN",
        "NCAXAXACN",
        "NCXAXAXCN",
        "NCCCCCCCN",
        "NNNNNNNNN"
    ], {
        N: NEUTRONIUM,
        C: 'avaritia:crystal_matrix_ingot',
        X: 'draconicevolution:chaos_shard',
        A: 'draconicevolution:awakened_core'
    })

    // Infinity Sword
    event.recipes.create.mechanical_crafting(Item.of('avaritia:infinity_sword', '{mode:{}}'), [
        "      I",
        "     II",
        "    II ",
        " S II  ",
        "  S    ",
        " S     ",
        "S      "
    ], { I: INF_INGOT, S: SHARD })

    // Infinity Pickaxe
    event.recipes.create.mechanical_crafting(Item.of('avaritia:infinity_pickaxe', '{mode:{}}'), [
        " IIIII ",
        "I  S  I",
        "   S   ",
        "   S   ",
        "   S   "
    ], { I: INF_INGOT, S: SHARD })

    // Armure de l'Infini
    event.recipes.create.mechanical_crafting('avaritia:infinity_helmet', [" IIIII "," I S I "," I   I "], { I: INF_INGOT, S: SHARD })
    event.recipes.create.mechanical_crafting('avaritia:infinity_chestplate', [" I   I ","II S II","IIIIIII"," IIIII "], { I: INF_INGOT, S: SHARD })
    event.recipes.create.mechanical_crafting('avaritia:infinity_pants', ["IIIIIII","I  S  I","I     I","I     I"], { I: INF_INGOT, S: SHARD })
    event.recipes.create.mechanical_crafting('avaritia:infinity_boots', [" I   I "," I S I ","II   II"], { I: INF_INGOT, S: SHARD })

    // Utilitaires
    event.recipes.create.mechanical_crafting('avaritia:infinity_bucket', ["I   I","I S I"," III "], { I: INF_INGOT, S: SHARD })
    event.recipes.create.mechanical_crafting('pipez:infinity_upgrade', ["ISI","SPS","ISI"], { I: INF_INGOT, S: SHARD, P: 'pipez:ultimate_upgrade' })
    event.recipes.create.mechanical_crafting('storagedrawers:creative_storage_upgrade', [" SSS ","S I S","S I S"," SSS "], { S: SHARD, I: 'storagedrawers:upgrade_template' })
    event.recipes.create.mechanical_crafting('avaritia:upgrade_smithing_template', [" S ","SIS"," S "], { S: SHARD, I: 'minecraft:netherite_upgrade_smithing_template' })
    event.recipes.create.mechanical_crafting('avaritia:eternal_singularity', ["  NNN  "," N S N ","N SSS N"," N S N ","  NNN  "], { N: NEUTRONIUM, S: SHARD })
    event.recipes.create.mechanical_crafting('avaritia:blaze_cube', ["BBBBB","BSBSB","BBBBB"], { B: 'minecraft:blaze_block', S: SHARD })
    event.recipes.create.mechanical_crafting('avaritia:infinity_chest', ["NNNNN","N S N","NININ","NNNNN"], { N: NEUTRONIUM, S: SHARD, I: INF_INGOT })

})