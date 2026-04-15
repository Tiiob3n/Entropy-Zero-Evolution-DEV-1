ServerEvents.recipes(event => {

    // --- MECHANICAL DAISY ---
    event.remove({ output: 'botanicalmachinery:mechanical_daisy' })
    event.shaped('botanicalmachinery:mechanical_daisy', [
        'RPR',
        'QDQ',
        'RPR'
    ], {
        R: 'deeperdarker:resonarium_plate', 
        P: 'mekanism:pellet_polonium',     
        Q: 'minecraft:quartz_block',
        D: 'botania:pure_daisy'
    })

    // --- MECHANICAL RUNIC ALTAR ---
    event.remove({ output: 'botanicalmachinery:mechanical_runic_altar' })
    event.shaped('botanicalmachinery:mechanical_runic_altar', [
        ' S ',
        'RAR',
        'RPR'
    ], {
        S: 'botania:runic_altar',
        R: 'deeperdarker:resonarium',
        A: 'mekanism:advanced_control_circuit',
        P: 'mekanism:pellet_plutonium'   
    })
// --- MECHANICAL APOTHECARY ---
    event.remove({ output: 'botanicalmachinery:mechanical_apothecary' })
    event.shaped('botanicalmachinery:mechanical_apothecary', [
        'SPS',
        'GAG',
        'SRS'
    ], {
        S: 'mekanism:ingot_steel',          
        P: 'botania:apothecary_default',     
        G: 'minecraft:gold_ingot',
        A: 'mekanism:advanced_control_circuit', 
        R: 'deeperdarker:resonarium'         
    })

    // --- MECHANICAL MANA POOL ---
    event.remove({ output: 'botanicalmachinery:mechanical_mana_pool' })
    event.shaped('botanicalmachinery:mechanical_mana_pool', [
        'R R',
        'MPM',
        'RCR'
    ], {
        R: 'deeperdarker:resonarium',
        M: 'botania:manasteel_ingot',
        P: 'botania:mana_pool',
        C: 'mekanism:advanced_control_circuit'
    })

    // --- MECHANICAL BREWERY ---
    event.remove({ output: 'botanicalmachinery:mechanical_brewery' })
    event.shaped('botanicalmachinery:mechanical_brewery', [
        'RBR',
        'GAG',
        'RSR'
    ], {
        R: 'deeperdarker:resonarium',
        B: 'botania:brewery',
        G: 'botania:elementium_ingot',
        A: 'mekanism:advanced_control_circuit',
        S: 'mekanism:steel_casing'
    })

    // --- INDUSTRIAL AGGLOMERATION FACTORY ---
    event.remove({ output: 'botanicalmachinery:industrial_agglomeration_factory' })
    event.shaped('botanicalmachinery:industrial_agglomeration_factory', [
        'TPT',
        'RCR',
        'TGT'
    ], {
        T: 'botania:terrasteel_ingot',
        P: 'botania:terra_plate',
        R: 'deeperdarker:resonarium',
        C: 'mekanism:elite_control_circuit',
        G: 'botania:gaia_spreader'
    })

})