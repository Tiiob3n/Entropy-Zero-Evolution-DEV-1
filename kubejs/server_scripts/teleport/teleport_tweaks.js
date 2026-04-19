ServerEvents.recipes(event => {
    event.remove({ id: 'allthemodium:teleport_pad' })
    event.shaped('allthemodium:teleport_pad', [
        'B B',
        ' A ',
        'B B'
    ], {
        A: 'create:precision_mechanism',
        B: 'minecraft:diamond_block'
    }).id('entropy:expert/teleport_pad')
})