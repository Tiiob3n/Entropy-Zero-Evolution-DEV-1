ServerEvents.recipes(event => {

    // --- 1. RITUEL D'INFUSION  ---
    event.recipes.mysticalagriculture.infusion(
        'entropy:resonarium_seeds',          
        'mysticalagriculture:prosperity_seed_base', 
        [
            'deeperdarker:resonarium', 'botania:mana_pearl',
            'deeperdarker:resonarium', 'botania:mana_pearl',
            'deeperdarker:resonarium', 'botania:mana_pearl',
            'deeperdarker:resonarium', 'botania:mana_pearl'
        ]
    )

    // --- 2. BOTANY POTS  ---
    event.custom({
        type: "botanypots:crop",
        seed: { item: "entropy:resonarium_seeds" },
        categories: ["farmland", "dirt"], 
        growthTicks: 2400,
        display: [
            { block: "minecraft:amethyst_cluster" }
        ],
        drops: [
            {
                chance: 1.0,
                output: { item: "entropy:resonarium_essence" }
            },
            {
                chance: 0,
                output: { item: "entropy:resonarium_seeds" }
            }
        ]
    }).id('entropy:botany_pots_resonarium_manual')

    // --- 3. UTILISATION DE L'ESSENCE ---
    event.shaped('deeperdarker:resonarium', [
        'EEE', 'E E', 'EEE'
    ], { E: 'entropy:resonarium_essence' })

})