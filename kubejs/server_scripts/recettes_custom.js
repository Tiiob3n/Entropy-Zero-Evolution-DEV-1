ServerEvents.recipes(event => {

    // --- VARIABLES DES SHARDS ---
    const IRON = 'resource_collector:iron_core_shard'
    const REDSTONE = 'resource_collector:redstone_core_shard'
    const STAR = 'resource_collector:nether_star_core_shard'

    // ==========================================
    //   PALIER 1 : IRON CORE SHARD (Début)
    // ==========================================
    
    // Vanilla
    event.shaped('minecraft:coal',           ['I  ', ' I ', '  I'], { I: IRON })
    event.shaped('minecraft:iron_ingot',     ['I I', 'I I', '   '], { I: IRON })
    event.shaped('minecraft:copper_ingot',   ['III', '   ', '   '], { I: IRON })
    event.shaped('minecraft:lapis_lazuli',   [' I ', 'III', ' I '], { I: IRON })
    event.shaped('minecraft:amethyst_shard', ['I I', '   ', 'I I'], { I: IRON })

    // AllTheOres
    event.shaped('alltheores:aluminum_ingot', ['I  ', 'I  ', 'I  '], { I: IRON })
    event.shaped('alltheores:tin_ingot',      ['I I', '   ', 'I I'], { I: IRON })
    event.shaped('alltheores:zinc_ingot',     ['   ', 'III', '   '], { I: IRON })
    event.shaped('alltheores:nickel_ingot',   ['I I', ' I ', 'I I'], { I: IRON })


    // ==========================================
    //   PALIER 2 : REDSTONE CORE SHARD (Mid)
    // ==========================================
    
    // Vanilla
    event.shaped('minecraft:redstone',       ['R  ', 'R  ', 'R  '], { R: REDSTONE })
    event.shaped('minecraft:glowstone_dust', ['RRR', 'RRR', '   '], { R: REDSTONE })
    event.shaped('minecraft:quartz',         ['R R', 'RRR', 'R R'], { R: REDSTONE })
    event.shaped('minecraft:diamond',        [' R ', 'R R', ' R '], { R: REDSTONE })

    // AllTheOres
    event.shaped('alltheores:silver_ingot',   ['RR', 'RR'], { R: REDSTONE })
    event.shaped('alltheores:lead_ingot',     [' R ', 'RRR', ' R '], { R: REDSTONE })
    event.shaped('alltheores:osmium_ingot',   ['R R', '   ', 'R R'], { R: REDSTONE })


    // ==========================================
    //   PALIER 3 : NETHER STAR CORE SHARD (End)
    // ==========================================
    
    // Vanilla
    event.shaped('minecraft:emerald',        [' S ', 'SSS', ' S '], { S: STAR })
    event.shaped('minecraft:netherite_ingot',['SSS', 'S S', 'SSS'], { S: STAR })
    event.shaped('minecraft:nether_star',    ['SSS', 'SSS', 'SSS'], { S: STAR }) 

    // AllTheOres
    event.shaped('alltheores:platinum_ingot', ['S S', ' S ', 'S S'], { S: STAR })
    event.shaped('alltheores:uranium_ingot',  [' S ', 'S S', ' S '], { S: STAR })
    event.shaped('alltheores:iridium_ingot',  ['S S', 'S S', ' S '], { S: STAR })


    // Recette du Smeltery Controller (Age 2)
    event.remove({output: 'tconstruct:smeltery_controller'})
    
    event.custom({
        type: "tconstruct:casting_basin",
        cast: { item: "tconstruct:seared_bricks" },
        cast_consumed: true,
        fluid: {
            name: "tconstruct:molten_brass",
            amount: 540
        },
        result: "tconstruct:smeltery_controller",
        cooling_time: 100
    })

    // --- RECHAPE DES COKE BRICKS (AGE 2) ---
    event.remove({output: 'immersiveengineering:cokebrick'})
    event.custom({
        type: "tconstruct:casting_basin",
        cast: { item: "tconstruct:seared_brick" },
        cast_consumed: true,
        fluid: {
            name: "tconstruct:molten_clay",
            amount: 250
        },
        result: "immersiveengineering:cokebrick",
        cooling_time: 60
    })

    // --- RECHAPE DES BLAST BRICKS (AGE 2) ---
    event.remove({id: 'immersiveengineering:crafting/blastbrick'})
    event.remove({output: 'immersiveengineering:blastbrick'})
    event.custom({
        type: "tconstruct:casting_basin",
        cast: { item: "immersiveengineering:cokebrick" },
        cast_consumed: true,
        fluid: {
            name: "tconstruct:molten_invar", 
            amount: 90 
        },
        result: "immersiveengineering:blastbrick",
        cooling_time: 100
    })

    // --- GESTION DU BRONZE EXCLUSIF ALLTHEORES ---
    event.remove({ output: '#forge:ingots/bronze' })
    event.remove({ id: 'immersiveengineering:alloysmelter/bronze' })

    event.recipes.create.mixing('4x alltheores:bronze_ingot', [
        '3x #forge:ingots/copper',
        '#forge:ingots/tin'
    ]).heated() 

    // --- CRAFT DE L'ALLOY BRICK (IE via Tinkers) ---
    event.remove({ output: 'immersiveengineering:alloybrick' })
    event.custom({
        type: "tconstruct:casting_basin",
        cast: { item: "tconstruct:seared_brick" },
        cast_consumed: true,
        fluid: {
            name: "tconstruct:molten_bronze", 
            amount: 90
        },
        result: "immersiveengineering:alloybrick",
        cooling_time: 80
    })

})