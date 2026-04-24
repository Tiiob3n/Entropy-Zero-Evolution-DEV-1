ServerEvents.recipes(event => {
    event.remove({ output: 'ae2:controller' })

    event.custom({
        type: "industrialforegoing:dissolution_chamber",
        input: [
            { item: "ae2:engineering_processor" }, 
            { item: "ae2:fluix_crystal" },           
            { item: "ae2:fluix_crystal" },           
            { item: "ae2:fluix_crystal" },           
            { item: "ae2:fluix_crystal" },           
            { item: "ae2:smooth_sky_stone_block" },
            { item: "ae2:smooth_sky_stone_block" },
            { item: "ae2:smooth_sky_stone_block" }
        ],
        inputFluid: "{FluidName:\"industrialforegoing:pink_slime\",Amount:250}",
        processingTime: 300,
        output: {
            item: "ae2:controller",
            count: 1
        }
    }).id('entropy:expert/ae2_controller_dissolution')
})