ServerEvents.recipes(event => {

    // --- 1. SOLS ---
    const soils = [
        { item: 'minecraft:dirt', block: 'minecraft:dirt', cat: 'dirt' },
        { item: 'minecraft:farmland', block: 'minecraft:farmland', cat: 'farmland' },
        { item: 'minecraft:sand', block: 'minecraft:sand', cat: 'sand' }
    ]

    soils.forEach(s => {
        event.custom({
            type: "botanypots:soil",
            input: { item: s.item },
            display: { block: s.block },
            categories: [s.cat],
            growthModifier: 0
        }).id(`entropy:soil_${s.item.split(':')[1]}`)
    })

    // --- 2. SEEDS VANILLA ---
    const vanillaCrops = [
        { name: 'wheat', seed: 'minecraft:wheat_seeds', display: 'minecraft:wheat', loot: 'minecraft:wheat' },
        { name: 'carrot', seed: 'minecraft:carrot', display: 'minecraft:carrots', loot: 'minecraft:carrot' },
        { name: 'potato', seed: 'minecraft:potato', display: 'minecraft:potatoes', loot: 'minecraft:potato' },
        { name: 'beetroot', seed: 'minecraft:beetroot_seeds', display: 'minecraft:beetroots', loot: 'minecraft:beetroot' }
    ]

    vanillaCrops.forEach(c => {
        event.custom({
            type: "botanypots:crop",
            seed: { item: c.seed },
            categories: ["farmland"],
            growthTicks: 1200,
            display: { block: c.display },
            drops: [
                { chance: 1.0, output: { item: c.loot } },
                { chance: 0.0, output: { item: c.seed } }
            ]
        }).id(`entropy:crop_${c.name}`)
    })

    // --- 3. CHAOS ---
    event.custom({
        type: "botanypots:crop",
        seed: { item: "entropy:chaos_seeds" },
        categories: ["farmland", "dirt"], 
        growthTicks: 2400,
        display: { block: "draconicevolution:reactor_core" },
        drops: [
            { chance: 1.0, output: { item: "entropy:chaos_essence" } },
            { chance: 0.00, output: { item: "entropy:chaos_seeds" } }
        ]
    }).id('entropy:botany_pots_chaos_manual')

})