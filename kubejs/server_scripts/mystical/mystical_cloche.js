ServerEvents.recipes(event => {

    // 1. Définition des paliers de vitesse (en ticks : 20 ticks = 1 seconde)
    const tiers = [
        { id: 'inferium', farmland: 'mysticalagriculture:inferium_farmland', time: 300 }, 
        { id: 'prudentium', farmland: 'mysticalagriculture:prudentium_farmland', time: 225 }, 
        { id: 'tertium', farmland: 'mysticalagriculture:tertium_farmland', time: 150 },     
        { id: 'imperium', farmland: 'mysticalagriculture:imperium_farmland', time: 100 },  
        { id: 'supremium', farmland: 'mysticalagriculture:supremium_farmland', time: 50 },   
        { id: 'insanium', farmland: 'mysticalagradditions:insanium_farmland', time: 20 }   
    ]

    // 2. Liste complète de graines
    const mySeeds = [
        'air', 'earth', 'water', 'fire', 'stone', 'dirt', 'wood', 'ice', 'deepslate', 'nature','nether_star',
        'dye', 'nether', 'coral', 'honey', 'amethyst', 'pig', 'chicken', 'cow', 'sheep', 'squid', 
        'fish', 'slime', 'turtle', 'silicon', 'rubber', 'sulfur', 'aluminium', 'saltpeter', 'apatite', 
        'grains_of_infinity', 'mystical_flower', 'marble', 'limestone', 'basalt', 'obsidian','gaia_spirit','dragon_egg',
        'prismarine', 'zombie', 'skeleton', 'creeper', 'spider', 'rabbit', 'bronze', 'zinc','glowstone',
        'brass', 'graphite', 'blizz', 'blitz', 'basalz', 'amethyst_bronze', 'slimesteel','nether_quartz', 
        'certus_quartz', 'sky_stone', 'ironwood', 'steeleaf', 'manasteel', 'conductive_alloy', 
        'redstone_alloy','aluminum', 'copper', 'copper_alloy', 'pig_iron', 'quartz_enriched_iron', 'lapis_lazuli', 
        'end', 'experience', 'blaze', 'ghast', 'enderman', 'chrome', 'uranium', 'titanium','tin','silver','lead','nickel','fluix','resonarium', 
        'tungsten', 'mithril', 'invar', 'electrum', 'constantan', 'ruby', 'sapphire', 'peridot', 
        'soulium', 'signalum', 'lumium', 'hop_graphite', 'cobalt', 'rose_gold', 'refined_glowstone', 
        'refined_obsidian', 'fluorite', 'osmium', 'elementium', 'energetic_alloy', 'pulsating_alloy', 
        'dark_steel', 'soularium', 'knightmetal', 'fiery_ingot', 'energized_steel', 'blazing_crystal', 
        'netherite', 'wither_skeleton', 'terrasteel', 'end_steel', 'vibrant_alloy', 'hepatizon','nitro_crystal',
        'queens_slime', 'manyullyn', 'enderium', 'iridium', 'platinum', 'draconium', 'yellorium','allthemodium','vibranium','unobtainium','antimatter','plutonium','polonium', 
        'cyanite', 'niotic_crystal', 'spirited_crystal', 'uraninite', 'steel', 'iron', 'gold', 'coal', 'diamond', 'emerald', 'inferium','redstone'
    ]

    mySeeds.forEach(type => {
        let seed = `mysticalagriculture:${type}_seeds`
        let essence = `mysticalagriculture:${type}_essence`
        let crop = `mysticalagriculture:${type}_crop`

        if (Item.exists(seed)) {
            tiers.forEach(tier => {
                event.custom({
                    type: "immersiveengineering:cloche",
                    results: [{ item: essence }],
                    input: { item: seed },
                    soil: { item: tier.farmland },
                    render: { type: "crop", block: crop },
                    time: tier.time
                })
            })
        }
    })

    console.log(`--- [PROJET] ${mySeeds.length} types de graines configurés avec 6 paliers de vitesse ! ---`)
})