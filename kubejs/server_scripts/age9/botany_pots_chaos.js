ServerEvents.recipes(event => {

    event.custom({
        type: "botanypots:crop",
        seed: { item: "entropy:chaos_seeds" },
        categories: ["farmland", "dirt"], 
        growthTicks: 2400,
        display: [
            { block: "draconicevolution:reactor_core" }
        ],
        drops: [
            {
                chance: 1.0,
                output: { item: "entropy:chaos_essence" }
            },
            {
                chance: 0,
                output: { item: "entropy:chaos_seeds" }
            }
        ]
    }).id('entropy:botany_pots_chaos_manual')

})