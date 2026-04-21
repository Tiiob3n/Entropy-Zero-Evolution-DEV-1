ServerEvents.recipes(event => {
    event.remove({ output: 'mekanism:upgrade_muffling' })
    event.shaped('mekanism:upgrade_muffling', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: '#forge:glass',
        B: 'mekanism:alloy_infused',
        C : 'mekanism:basic_control_circuit'
    }).id('entropy:expert/upgrade_muffling')
})