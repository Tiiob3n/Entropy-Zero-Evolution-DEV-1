ServerEvents.recipes(event => {

    // --- 1. MACHINES ET INFRASTRUCTURE ---
    
    // Extractor (Expert)
    event.remove({ id: 'xycraft_machines:shaped/extractor' })
    event.shaped('xycraft_machines:extractor', [
        'BXB',
        'BCB',
        'BRB'
    ], {
        B: 'alltheores:bronze_ingot',           
        X: 'xycraft_world:xychorium_gem_blue', 
        C: 'create:brass_casing',              
        R: 'alltheores:bronze_rod'
    }).id('entropy:age4/xycraft_extractor')

    // Absorption Hopper
    event.remove({ output: 'mob_grinding_utils:absorption_hopper' })
    event.shaped('mob_grinding_utils:absorption_hopper', [
        'BGB',
        'GHG',
        'BGB'
    ], {
        B: 'alltheores:bronze_ingot',
        G: 'xycraft_world:xychorium_gem_dark',
        H: 'minecraft:hopper'
    }).id('entropy:age4/absorption_hopper')


    // --- 2. SYNTHÈSE DES GEMMES XYCHORIUM ---
    
    const gemColors = [
        { color: 'blue',  dye: 'minecraft:blue_dye' },
        { color: 'green', dye: 'minecraft:green_dye' },
        { color: 'red',   dye: 'minecraft:red_dye' },
        { color: 'dark',  dye: 'minecraft:black_dye' },
        { color: 'light', dye: 'minecraft:white_dye' }
    ]

    gemColors.forEach(gem => {
        event.shaped(`xycraft_world:xychorium_gem_${gem.color}`, [
            'KKK',
            'KDK',
            'KKK'
        ], {
            K: 'xycraft_world:kivi',
            D: gem.dye
        }).id(`entropy:age4/gem_craft_${gem.color}`)
    })


    // --- 3. UPGRADES MOB UTILS (CRAFTS UNIQUES & THÉMATIQUES) ---

    function upgrade(id, gem, specialItem, nugget) {
        event.remove({ output: `mob_grinding_utils:${id}` })
        event.shaped(`mob_grinding_utils:${id}`, [
            'XGX',
            'IPI',
            'XGX'
        ], {
            X: `xycraft_world:xychorium_gem_${gem}`,
            G: nugget,
            I: specialItem,
            P: 'minecraft:paper'
        }).id(`entropy:age4/upgrade/unique/${id}`)
    }

    // --- UPGRADES UTILITAIRES (Mouvement & Spawner) ---
    upgrade('fan_upgrade_height', 'light', 'minecraft:feather', 'minecraft:gold_nugget')
    upgrade('fan_upgrade_width',  'light', 'minecraft:sugar',   'minecraft:gold_nugget')
    upgrade('fan_upgrade_speed',  'blue',  'minecraft:clock',   'minecraft:gold_nugget')
    
    upgrade('spawner_upgrade_width',  'blue',  'minecraft:ender_pearl',      'minecraft:gold_nugget')
    upgrade('spawner_upgrade_height', 'blue',  'minecraft:phantom_membrane', 'minecraft:gold_nugget')
    
    upgrade('absorption_upgrade',     'dark',  'minecraft:obsidian', 'minecraft:gold_nugget')
    upgrade('xp_solidifier_upgrade',  'green', 'minecraft:emerald',  'minecraft:gold_nugget')

    // --- UPGRADES DE COMBAT (Mob Masher / Saw) ---
    upgrade('saw_upgrade_sharpness', 'red',   'minecraft:quartz',       'minecraft:iron_nugget')
    upgrade('saw_upgrade_fire',      'red',   'minecraft:blaze_powder', 'minecraft:iron_nugget')
    upgrade('saw_upgrade_smite',     'red',   'minecraft:rotten_flesh', 'minecraft:iron_nugget')
    upgrade('saw_upgrade_arthropod', 'red',   'minecraft:spider_eye',   'minecraft:iron_nugget')
    
    // --- UPGRADES DE BUTIN (Rareté) ---
    upgrade('saw_upgrade_looting',   'light', 'minecraft:rabbit_foot',           'minecraft:iron_nugget')
    upgrade('saw_upgrade_beheading', 'dark',  'minecraft:wither_skeleton_skull', 'minecraft:iron_nugget')

})