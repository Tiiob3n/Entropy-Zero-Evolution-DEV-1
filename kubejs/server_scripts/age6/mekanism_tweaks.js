ServerEvents.recipes(event => {
 event.remove({ output: 'mekanism:alloy_infused' })
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        itemInput: { ingredient: { item: 'thermal:lumium_ingot' } },
        chemicalInput: { amount: 20, infuse_type: 'mekanism:redstone' },
        output: { item: 'mekanism:alloy_infused' }
    }).id('entropy:age6/basic_alloy_infused')
})
